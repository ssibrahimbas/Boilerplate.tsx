FROM node:18-alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

# Path: Dockerfile

FROM nginx:latest as runner

COPY --from=builder /app/dist /usr/share/nginx/html