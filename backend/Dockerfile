FROM node:20-alpine as builder 

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma .prisma/

RUN npm ci

COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD [ "npm","run","start:migrate:prod" ]