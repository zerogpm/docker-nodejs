FROM node:20-alpine AS base
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .

# Development stage
FROM base AS development
CMD ["npm", "start"]