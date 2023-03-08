# syntax=docker/dockerfile:1
   
FROM node:18
ENV endpoint="http://127.0.0.1:3000"
COPY . .
RUN npm i
CMD [ "node", "app.js" ]
EXPOSE 3001