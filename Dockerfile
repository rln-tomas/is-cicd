FROM node:14.17.0-alpine

WORKDIR /app

COPY . .

RUN npm install

CMD ["node", "./bin/www"]
