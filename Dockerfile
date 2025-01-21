FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run unittests

RUN npm run check

RUN npm run lint

RUN npm run build

EXPOSE 10000

CMD ["npm", "run", "preview"]