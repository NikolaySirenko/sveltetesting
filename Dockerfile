FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run unittests

RUN npm run build

EXPOSE 10000 10000

RUN npm run preview