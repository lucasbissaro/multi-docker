FROM node:14.4.0-alpine

WORKDIR "/home/node/app"

COPY ./package.json .

RUN npm install
COPY . .

USER node
CMD ["npm","run","start"]