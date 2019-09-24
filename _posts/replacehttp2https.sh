#!/bin/bash
echo $0

for file in *.markdown
do
        sed -e 's/http/https/g' -i "$file"
done
