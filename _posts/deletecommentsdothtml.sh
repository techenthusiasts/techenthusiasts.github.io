#!/bin/bash
echo $0

for file in *.markdown
do
	sed '/comments.html/d' "$file" > "$file".tmp
	mv "$file".tmp "$file"
done
