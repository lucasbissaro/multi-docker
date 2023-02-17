FROM node:14.4.0-alpine

USER node
WORKDIR "/home/node/app"

COPY ./package.json .

RUN npm install
COPY . .

CMD ["npm","run","start"]