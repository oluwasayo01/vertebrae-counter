FROM python:3.9

ENV PYTHONUNBUFFERED=1

WORKDIR /api

ADD . .

RUN pip install -r requirements.txt


ENTRYPOINT [ "./activate.sh" ]
