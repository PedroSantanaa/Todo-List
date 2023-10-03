FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

USER node

COPY --chown=node:node . .

RUN npm run build

EXPOSE 3000

CMD [ "npm" "dist/main.js" ]