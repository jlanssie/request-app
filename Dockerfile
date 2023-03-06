# syntax=docker/dockerfile:1
   
FROM node:18
COPY . .
RUN npm i
CMD [ "node", "app.js" ]
EXPOSE 3000
