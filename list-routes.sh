#!/bin/bash

# Define the directories where routes can be found
ROUTES_DIRS=("pages" "app" "src/pages" "src/app")

# Find all files in the defined directories
for DIR in "${ROUTES_DIRS[@]}"; do
  if [ -d "$DIR" ]; then
    echo "Routes found in $DIR:"
    find "$DIR" -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" \) | while read -r file; do
      # Extract the route from the file path
      route=$(echo "$file" | sed -e "s|^$DIR||" -e 's|/index||' -e 's|\.[jt]sx\?$||' -e 's|^|/|')
      # Replace dynamic route segments with placeholder
      route=$(echo "$route" | sed -e 's/\[\([^]]*\)\]/:$\1/g')
      echo "$route"
    done
  fi
done
