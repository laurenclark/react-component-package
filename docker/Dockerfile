FROM node:16.13.0-alpine

WORKDIR /app

ARG PORT

ENV PATH /app/node_modules/.bin:$PATH

COPY .env /app/.env
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
COPY .babelrc /app/.babelrc
COPY jest.config.js /app/jest.config.js
COPY tsconfig.json /app/tsconfig.json

RUN npm cache clean --force && npm install -g npm@8.4.1 && npm install && rm -rf .npmrc

COPY . /app
EXPOSE ${PORT}

CMD ["npm", "start"]
