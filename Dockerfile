FROM node:18

EXPOSE 8080

COPY . .

RUN npm install

RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s", "dist", "-l", "8080"]
