FROM node:18.16-alpine

WORKDIR /usr/app

COPY package.json /usr/app/

RUN npm install

COPY . /usr/app/

CMD ["npm", "start"]