FROM node:16.14.2

WORKDIR /workout

COPY package*.json ./

RUN npm install

COPY . ./workout

ENV PORT=4000

EXPOSE 4000

RUN npx prisma generate

CMD ["npm", "run", "dev:migrate"]