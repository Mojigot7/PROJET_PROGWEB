# syntax=docker/dockerfile:1
FROM python:3.11.3-slim-buster
 
WORKDIR /app

COPY requirements.txt .

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . .
ENV FLASK_APP=flask_app.py

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]
EXPOSE 5000
