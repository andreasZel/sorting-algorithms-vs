FROM node:18

EXPOSE 8080

COPY . .

RUN npm install

CMD ["serve", "-s", "dist", "-l", "8080"]
