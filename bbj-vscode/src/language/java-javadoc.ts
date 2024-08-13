/******************************************************************************
 * Copyright 2024 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/

import { EmptyFileSystemProvider, FileSystemNode, FileSystemProvider } from "langium";
import { CancellationToken } from "vscode-jsonrpc";
import { URI } from "vscode-uri";

/**
 * Provides Javadoc information for internal binary classes.
 */
export class JavadocProvider {

    private static _instance: JavadocProvider;

    private lazyLoad: boolean = false;
    private packages: Map<string, PackageDoc | URI | null> | undefined;
    private fsAccess: FileSystemProvider = new EmptyFileSystemProvider();


    protected constructor(lazyLoad: boolean = false) {
        this.lazyLoad = lazyLoad;
    }

    static getInstance(): JavadocProvider {
        if (!JavadocProvider._instance) {
            JavadocProvider._instance = new JavadocProvider();
        }
        return JavadocProvider._instance;
    }

    /**
     * 
     * @param roots folders that contains javadoc files
     * @param fsAccess file system access
     * @param cancelToken handles cancel requests
     */
    async initialize(roots: URI[], fsAccess: FileSystemProvider, cancelToken: CancellationToken = CancellationToken.None) {
        if (this.packages !== undefined) {
            throw new Error("JavadocProvider already initialized");
        }
        this.packages = new Map();
        this.fsAccess = fsAccess;
        for (const root of roots.filter(uri => uri.scheme === 'file')) {
            if (cancelToken.isCancellationRequested) {
                return;
            }
            let nodes: FileSystemNode[];
            try {
                nodes = await this.fsAccess.readDirectory(root)
            } catch (e) {
                console.warn(`Failed to read javadoc directory ${root.toString()}: ${e}`);
                continue;
            }
            for (const node of nodes) {
                const fileName = this.filename(node.uri)
                if (node.isFile && fileName && fileName.endsWith(".json")) {
                    const packageName = fileName.slice(0, -5); // cut .json
                    if (packageName !== undefined) {
                        this.packages.set(packageName, this.lazyLoad ? node.uri : await this.loadJavadocFile(packageName, node.uri));
                        console.debug(`Javadoc for package '${packageName}' loaded.`);
                    }
                }
            }
        }
    }

    public async getPackageDoc(packageName: string): Promise<PackageDoc | undefined> {
        if (this.packages === undefined) {
            throw new Error("JavadocProvider not initialized. Call initialize() first.");
        }
        const packageDoc = this.packages.get(packageName);
        if (!packageDoc) {
            return undefined;
        } else if (packageDoc instanceof URI) {
            const resolvedDoc = await this.loadJavadocFile(packageName, packageDoc);
            this.packages.set(packageName, resolvedDoc);
            return resolvedDoc === null ? undefined : resolvedDoc;
        } else {
            return packageDoc;
        }
    }

    /**
     * Load javadoc file
     * @param packageName 
     * @param packageDocURI 
     * @returns  PackageDoc or null. Null if failed to load.
     */
    protected async loadJavadocFile(packageName: string, packageDocURI: URI): Promise<PackageDoc | null> {
        try {
            const doc = JSON.parse(await this.readFile(packageDocURI)) as PackageDoc;
            if (doc.name !== packageName) {
                console.error(`Failed to load javadoc file, package name '${doc.name}' does not match file name ${packageDocURI.toString()}`);
                return null;
            }
            return doc;
        } catch (e) {
            console.error(`Failed to load javadoc file ${packageDocURI.toString()}: ${e}`);
        }
        return null
    }

    protected async readFile(packageDocURI: URI): Promise<string> {
        return await this.fsAccess.readFile(packageDocURI)
    }

    protected filename(uri: URI): string | undefined {
        return uri.path.split('/').pop();
    }
}

export type NamedDoc = {
    name: string,
    docu?: string
}

export type PackageDoc = NamedDoc & {
    classes: ClassDoc[]
}

export type ClassDoc = NamedDoc & {
    fields: NamedDoc[],
    methods: MethodDoc[],
    constructors?: MethodDoc[]
}

export type MethodDoc = NamedDoc & {
    params: NamedDoc[]
}