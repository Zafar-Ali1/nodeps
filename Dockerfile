FROM node:18.4

WORKDIR app

COPY package*.json ./
RUN npm install
expose 80

COPY . .
CMD node app.js
