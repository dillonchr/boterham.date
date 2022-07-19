FROM nginx:1.23.0-alpine
WORKDIR /pages/
COPY . .
COPY nginx.conf /etc/nginx/conf.d/default.conf

