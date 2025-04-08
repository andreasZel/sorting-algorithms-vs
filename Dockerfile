FROM ubuntu:22.04

EXPOSE 8080

COPY . .

RUN npm install

CMD ["serve", "-s", "dist", "-l", "8080"]
