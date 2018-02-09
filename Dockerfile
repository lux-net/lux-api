FROM node:carbon

ENV HOME=/home/app

ADD package.json $HOME/lux/package.json
RUN cd $HOME/lux && npm install --silent --progress=false
RUN cp -a $HOME/lux/node_modules $HOME/node_modules

WORKDIR $HOME/lux/
COPY . $HOME/lux

EXPOSE 5000 3000 $PORT

CMD ["npm", "start"]
