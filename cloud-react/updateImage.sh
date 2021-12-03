#!/bin/bash
echo "String script"

echo "Building docker image"
docker build --platform linux/amd64 -t 5333-react-chat .

echo "tagging docker image"
docker tag 5333-react-chat amlanalok/5333-react-chat

echo "Pushing image to Docker Hub"
docker push amlanalok/5333-react-chat

echo "Docker image has been successfully pushed"