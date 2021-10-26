#!/bin/bash

cd mydarknet
make
# wget https://pjreddie.com/media/files/yolov3.weights
cd ..
python3 manage.py makemigrations detector
python3 manage.py migrate


# exec gunicorn --bind 0.0.0.0:$PORT --workers 1 --threads 8 --timeout 0 counting_vertebrae.wsgi:application

python3 manage.py runserver 0.0.0.0:8000