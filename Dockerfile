FROM ghcr.io/puppeteer/puppeteer:23.6.0

ENV PUUPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["node", "src/api/index.js"]
