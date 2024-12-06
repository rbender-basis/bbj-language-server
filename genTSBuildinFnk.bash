#!/bin/env bash
# $1 should be the output file of genDocBuildtinFnk.bash

echo -e "export const builtinFunctions = \`""\n"
cat $1
echo -e "\`".trimLeft\(\)\;