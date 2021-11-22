#!/bin/bash

cd mydarknet

make clean

make
# wget https://pjreddie.com/media/files/yolov3.weights
cd ..


python3 manage.py migrate
python3 manage.py collectstatic --no-input


# exec gunicorn --bind 0.0.0.0:$ --workers 3 --timeout 120 counting_vertebrae.wsgi:application
# exec gunicorn --bind 0.0.0.0:$PORT --workers 3 --timeout 120 counting_vertebrae.wsgi:application
exec gunicorn --bind 0.0.0.0:$PORT --workers 1 --threads 8 --timeout 0 counting_vertebrae.wsgi:application
# python3 manage.py runserver 0.0.0.0:8000