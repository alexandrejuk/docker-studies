FROM node:8.11.2

LABEL key="Alexandre dos Santos Soares <ale_santos.soares@hotmail.com>" 

WORKDIR /home/server/backend

COPY package.json /home/server/backend

RUN yarn --prod

COPY . /home/server/backend

EXPOSE 3000

CMD [ "yarn", "start" ]