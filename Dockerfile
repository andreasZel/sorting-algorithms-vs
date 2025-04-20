FROM node:18-alpine AS buildstage

EXPOSE 8080

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build


FROM node:18-alpine

WORKDIR /usr/src/app

COPY --from=buildstage /usr/src/app/dist/ /usr/src/app/dist/

RUN npm install -g serve

CMD ["serve", "-s", "dist", "-l", "8080"]