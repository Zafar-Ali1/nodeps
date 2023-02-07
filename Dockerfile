FROM node:18.4

WORKDIR  /nodeps

COPY package*.json .
RUN npm install
COPY . .
CMD node app.js