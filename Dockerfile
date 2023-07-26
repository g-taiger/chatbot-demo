FROM node:16.13.0-alpine3.12
ENV NODE_VERSION 14.18.1 
WORKDIR /usr/src/app  
COPY ./app /usr/src/app 
EXPOSE 3000 
ENV CI=true 