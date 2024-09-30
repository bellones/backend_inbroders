FROM node:22-slim

# Instala o OpenSSL
RUN apt-get update -y && apt-get install -y openssl && apt-get install -y procps

WORKDIR /home/nome/app

USER node

CMD ["tail", "-f", "/dev/null"]