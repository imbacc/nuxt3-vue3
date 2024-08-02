FROM node:latest

ENV WORKDIR=/nuxt-vue3
WORKDIR $WORKDIR

COPY --from=builder ../.output .
COPY --from=builder ../ecosystem.config.js .

RUN npm install pm2 -g

CMD ["pm2-runtime", "start", "ecosystem.config.js"]