FROM node:16-alpine as builder

USER node
RUN rm -rf '/usr/node/app/node_modules'

WORKDIR '/usr/node/app'


COPY --chown=node:node ./package.json .

RUN npm config set unsafe-perm true
RUN npm install



COPY --chown=node:node . .


RUN mkdir -p /usr/node/app/node_modules/.cache
RUN chmod 777 -R /usr/node/app/node_modules/.cache
RUN chown -R node:node /usr/node/app


USER node
RUN npm run build

FROM nginx
EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/node/app/build /usr/share/nginx/html