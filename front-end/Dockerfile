FROM node:18.16-alpine

WORKDIR /usr/clientApp

COPY package.json /usr/clientApp/

RUN npm install

COPY . /usr/clientApp/

EXPOSE 3000

CMD ["npm", "start"]