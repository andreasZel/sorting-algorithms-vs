FROM ubuntu:22.04

EXPOSE 8080

WORKDIR /usr/src/app

RUN apt-get update && apt-get -y install git

RUN git clone https://github.com/andreasZel/sorting-algorithms-vs.git && \
    cp -a sorting-algorithms-vs/. . && \
    rm -rf sorting-algorithms-vs

RUN apt-get install -y curl gnupg; \
    curl -sL https://deb.nodesource.com/setup_16.x | bash -; \
    apt-get install -y nodejs; \ 
    apt-get install npm -y; \
    rm -rf /var/lib/apt/lists/*

COPY . .

RUN npm install -f
RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s", "dist", "-l", "8080"]
