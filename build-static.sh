#!/bin/bash

# Build static site for GitHub Pages
echo "Building static site for GitHub Pages..."

# Run the Vite build (frontend only)
npx vite build

# Create docs directory (GitHub Pages serves from /docs)
rm -rf docs
mkdir -p docs

# Copy built files to docs
cp -r dist/public/* docs/

# Copy .nojekyll to docs
cp .nojekyll docs/

# Create a simple 404.html (optional fallback)
cp docs/index.html docs/404.html

echo "✅ Static site built successfully in /docs folder"
echo "Ready to deploy to GitHub Pages!"
