FROM node:20.10-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

COPY .env .env
CMD ["node", "index.js"]