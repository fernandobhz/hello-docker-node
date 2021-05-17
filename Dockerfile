FROM node:lts
WORKDIR /usr/src/app
COPY . . 
RUN npm install
EXPOSE 10290
CMD [ "npm", "start" ]
