FROM node:20-alpine

COPY package*.json ./

COPY prisma ./prisma/

RUN npm install

RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]