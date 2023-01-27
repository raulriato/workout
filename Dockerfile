FROM node:16.14.2

WORKDIR /workout

COPY package*.json ./

COPY . ./workout

ENV PORT=4000

EXPOSE 4000

RUN npm install
RUN npx prisma generate

CMD ["npm", "run", "dev:migrate"]