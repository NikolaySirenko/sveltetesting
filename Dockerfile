FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run unittests

RUN npm run build

EXPOSE 3000 10000
ENV PORT=3000
ENV HOST=0.0.0.0

RUN npm run preview