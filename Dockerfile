FROM node:18-alpine as base

WORKDIR /src
COPY package*.json /
EXPOSE 4001

FROM base as production
ENV NODE_ENV=production
RUN npm ci
RUN npm install -g typescript
RUN npm install -g ts-node
COPY . /
CMD ["node"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install
COPY . /
CMD ["nodemon"]
