#!/bin/bash
cd /home/kavia/workspace/code-generation/flow-diagram-builder-and-executor-49108-49118/react_js_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

