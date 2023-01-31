FROM nikolaik/python-nodejs:python3.7-nodejs14

ENV PYTHONUNBUFFERED=1

WORKDIR /app

ARG PORT=8000

COPY ./requirements.txt .
RUN pip install -r requirements.txt

ADD . .

RUN yarn cache clean
RUN cd frontend && \ 
    yarn install && \
    yarn build && \
    cd ..

ENV PORT=${PORT}

ENTRYPOINT [ "./activate.sh" ]
