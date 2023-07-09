FROM node:16.14.2 as MAGASIN

WORKDIR /MAGASIN

COPY package*.json /MAGASIN/

RUN npm install

COPY ./ /app/

ARG configuration=production

RUN npm run build — –output-path=./MAGASIN-dist/out –configuration $configuration

FROM nginx:1.15

COPY –from=build-stage /MAGASIN-app/MAGASIN-dist/out/ C:/Users/moham/.vscodenginx-magasin/html/

COPY ./magasin-nginx-custom.conf /etc/nginx/conf.d/default.conf