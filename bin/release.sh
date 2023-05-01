#!/bin/bash

# Get current version in package.json
currentVersion=$(cat package.json | grep version | cut -d '"' -f 4)

# Print current version
echo "Current version is $currentVersion"


# Update version using npm version command
read -p "Enter new version: " newVersion
npm version --no-git-tag-version $newVersion

# Get updated version from package.json
newVersion=$(cat package.json | grep version | cut -d '"' -f 4)

# Set new version to 'version' property in manifest.json
sed -i '' "s/\"version\": \".*\"/\"version\": \"$newVersion\"/g" ./manifest.json

# Commit changes
git add package.json ./manifest.json
git commit -m "Bump version to v$newVersion"

# Add tag with new version to git
git tag "v$newVersion"

# Push to remote with following tags
git push && git push --tags