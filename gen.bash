#!/bin/env bash

bash genDocBuildinFnk.bash > bbj-vscode/src/language/lib/functions.bbl
patch bbj-vscode/src/language/lib/functions.bbl function.diff
rm bbj-vscode/src/language/lib/functions.bbl.* 2>/dev/null
bash genTSBuildinFnk.bash bbj-vscode/src/language/lib/functions.bbl > bbj-vscode/src/language/lib/functions.ts