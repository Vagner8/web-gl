FROM node:lts-alpine
ENV NODE_ENV=production
RUN mkdir -p /beckend
WORKDIR /beckend
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
USER node
CMD ["npm", "start"]