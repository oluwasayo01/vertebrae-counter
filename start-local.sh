#!/bin/bash

docker build -t vcounter --no-cache .
docker run vcounter -p 8500:800 vcounter