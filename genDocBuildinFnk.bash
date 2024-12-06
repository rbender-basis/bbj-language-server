#!/bin/env bash
# depends on html-xml-utils, sed, grep, cut

rm /dev/shm/skipped.txt 2>/dev/null

echo -e "\n""library""\n"
while read -r filename; do
    if [[ $filename =~ "_bbj" ]]; then
        echo $filename >> /dev/shm/skipped.txt
        continue
    fi
    if [[ $filename == "doc/commands/_function.htm" ]]; then
        echo $filename >> /dev/shm/skipped.txt
        continue
    fi
    echo -e "/@@""\n"
    length=$(echo $(cat $filename | hxselect h2 + p.Code -s "\n" | head -n1 | tee /dev/shm/tmp | wc -m)-1 | bc)
    if [[ "$length" < "1" ]]; then
        cat $filename | hxselect p.Code -s "\n" | head -n2 | tail -n1 > /dev/shm/tmp
    fi
    # the pipe into tee is so that I have it after the /@@ and in the file for later in one go
    cat /dev/shm/tmp | sed 's/<p class="Code">//' | sed 's/<font style="font-style: italic;">//g' | sed 's/<\/font>//g' \
        | sed 's/<\/p>//g' | sed -E 's/[\r\n|\n]//g' | sed -E 's/<(\/)?br>//g' | sed 's/\$//g' | sed 's/[\{|\}]//g' | tee /dev/shm/syntax
    echo -e "\n"
    echo -e "#### Syntax"
    echo -e \\\`$(cat /dev/shm/syntax)\\\`"\n"
    cat $filename | hxselect h2 + p -s "\n" > /dev/shm/full.tmp
    cat $filename | hxselect h2 + p.Code -s "\n" > /dev/shm/code.tmp
    diff --suppress-common-lines /dev/shm/full.tmp /dev/shm/code.tmp | grep "<" | head -n-1 | sed 's/< //' > /dev/shm/diff
    echo -e "#### Description"
    hxextract P /dev/shm/diff | sed -E 's/<(\/)?p>//g' | sed -E 's/<(\/)?br>//g' | sed -E 's/<(\/)?font>//g' | sed 's/<font style="font-style: italic;">//g'
    echo -e "\n"
    echo Documentation: https://documentation.basis.cloud/BASISHelp/WebHelp/commands$(echo $filename | sed 's/doc\/commands[0-9]//')
    echo "@/"
    echo "$(cat /dev/shm/syntax |  sed 's/=/:/g' | sed 's/\[//g' | sed 's/\]//g' | sed 's/\$//g' | sed -E 's/(,)?\.//g' \
        | sed -E 's/:[0-9]//g' ): any" && echo -e "\n"
done<<<$(
    echo "doc/commands2/null_function_return_java_null_value.htm"
    while read -r line; do
        if [[ $line =~ \"[a-z]*_function(_bbj)?.htm\" ]]; then
            echo "doc/commands/"$(echo $line | grep -Eo '[a-z]*_function(_bbj)?.htm')
        else 
            echo "doc/"$(echo $line | grep -Eo 'commands[0-9]*/[a-z]*_function(_bbj)?.htm')
        fi
    done<<<$(
        cat doc/commands/alphabetical_functions.htm | hxselect a | hxnormalize | grep -Eo 'href="(../commands[0-9]*/)?[a-z]*_function(_bbj)?.htm"' | cut -d"=" -f 2
    )
)

rm /dev/shm/syntax /dev/shm/full.tmp /dev/shm/code.tmp /dev/shm/diff