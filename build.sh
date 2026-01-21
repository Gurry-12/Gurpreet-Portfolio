#!/bin/bash
echo "Cleaning up..."
rm -rf node_modules package-lock.json

echo "Installing dependencies with legacy peer deps..."
npm install --legacy-peer-deps --no-package-lock

echo "Building project..."
npm run build

echo "Build complete!"