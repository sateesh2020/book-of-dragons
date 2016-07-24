FROM mhart/alpine-node:4.4

WORKDIR /src

COPY package.json package.json

COPY . .

RUN npm install

EXPOSE 3005

CMD ["node", "app.js"]
