#!/bin/bash

echo "🤖 Starting Android App..."
echo ""
echo "📁 Navigating to example directory..."

cd "$(dirname "$0")/example" || exit 1

echo "✅ Current directory: $(pwd)"
echo ""
echo "🚀 Running Android app..."
echo ""

npm run android
