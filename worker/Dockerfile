FROM node:14.14.0-alpine

WORKDIR '/home/node/app'
COPY ./package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "start"]