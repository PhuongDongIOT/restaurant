#!/bin/sh

echo "🚀 Starting resend-email-service..."

if [ -z "$RESEND_API_KEY" ]; then
  echo "❌ RESEND_API_KEY is not set"
  exit 1
fi

./server
