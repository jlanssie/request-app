# syntax=docker/dockerfile:1
   
FROM node:18
ENV endpoint="host.docker.internal:3000"
COPY . .
RUN npm i
CMD [ "node", "app.js" ]
