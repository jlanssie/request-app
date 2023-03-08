# Request App

A sample ExpressJS app in a Docker container.

## Installation

`sudo docker build -t request-app .`

## Run

`sudo docker run -dp 3001:3001 request-app -e endpoint="http://127.0.0.1":3000`

## Stop

`sudo docker container ls --all`

`sudo docker stop id`