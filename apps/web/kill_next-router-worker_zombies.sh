#!/bin/sh

# Find the process IDs of all processes containing the string "processChild.js" in the command path
pids=$(pgrep -f "next-router-worker")

# Iterate over each process ID and kill the corresponding process
for pid in $pids; do
    echo "Killing process: $pid"
    kill "$pid"
done
# ref. https://github.com/vercel/next.js/issues/45508#issuecomment-1560568292
