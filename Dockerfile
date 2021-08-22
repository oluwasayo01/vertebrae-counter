FROM python:3.9

ENV PYTHONUNBUFFERED=1

WORKDIR /api

ADD . .

RUN pip install -r requirements.txt

EXPOSE 8000

ENTRYPOINT [ "./activate.sh" ]
