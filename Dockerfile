FROM node:18.12.1

WORKDIR /medoc-server

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm","start" ]