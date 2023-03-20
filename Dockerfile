FROM node:16.14.0-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN $(npm bin)/ng build --configuration=production --source-map=false

FROM nginx:1.21.5-alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/github-test-frontend /usr/share/nginx/html
EXPOSE 80
CMD nginx -g "daemon off;"
