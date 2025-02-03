#!/bin/bash

branch="$VERCEL_GIT_COMMIT_REF"
echo "VERCEL_GIT_COMMIT_REF: $branch"

if [[ "$branch" == "staging" || "$branch" == "main"  ]] ; then
  echo "✅ - Build can proceed"
  exit 1;
else
  echo "🛑 - Build cancelled"
  exit 0;
fi
