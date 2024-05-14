FROM node:18.6-alpine3.15 as build-stage

RUN apk add git

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY ./default.conf /etc/nginx/conf.d
