FROM mhart/alpine-node

COPY . ./data
WORKDIR /data

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]