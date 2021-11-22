FROM nikolaik/python-nodejs:python3.7-nodejs14

ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY ./requirements.txt .
RUN pip install -r requirements.txt

ADD . .

RUN yarn cache clean
RUN cd front && \ 
    yarn install && \
    yarn build && \
    cd ..

# EXPOSE 800
# RUN cd mydarknet && \
#     make clean && \
#     make && \
#     cd ..

# RUN python manage.py migrate

# RUN python manage.py collectstatic --no-input




# CMD gunicorn --bind 0.0.0.0:$PORT --workers 1 counting_vertebrae.wsgi:application
ENTRYPOINT [ "./activate.sh" ]
