#!/bin/bash
echo "String script"

echo "Building docker image"
docker build -t 5333-react-chat .

echo "Running docker image"
docker run -dp 3000:3000 5333-react-chat

docker ps
echo "docker image ran with success"
