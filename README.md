# Request App

A sample ExpressJS app in a Docker container.

## Installation

`sudo docker build -t request-app .`

## Run

`sudo docker run -dp 3001:3001 --add-host host.docker.internal:host-gateway -e protocol="http" -e endpoint="host.docker.internal:3000" request-app`

## Stop

`sudo docker container ls --all`

`sudo docker stop id`