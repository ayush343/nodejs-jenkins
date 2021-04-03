FROM node:latest
WORKDIR /node/app
COPY . .
RUN npm install
CMD npm run start
EXPOSE 9999
