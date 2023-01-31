#!/bin/bash

docker build -t vcounter --no-cache .
docker run -d -p 8500:8000 vcounter