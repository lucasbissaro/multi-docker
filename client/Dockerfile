FROM node:16-alpine as builder

RUN rm -rf '/usr/node/app/node_modules'

WORKDIR '/usr/node/app'

COPY ./package.json .

RUN npm config set unsafe-perm true


RUN npm install



COPY . .



USER node
RUN npm run build

FROM nginx
EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/node/app/build /usr/share/nginx/html