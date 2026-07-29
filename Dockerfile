FROM node:22-alpine AS build

ARG NUXT_PUBLIC_STRAPI_URL=https://cms.sensus.org
ENV NUXT_PUBLIC_STRAPI_URL=$NUXT_PUBLIC_STRAPI_URL

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build && test -f .output/server/index.mjs

FROM node:22-alpine

WORKDIR /app

COPY --from=build /app/.output .output

ARG NUXT_PUBLIC_STRAPI_URL=https://cms.sensus.org
ENV NUXT_PUBLIC_STRAPI_URL=$NUXT_PUBLIC_STRAPI_URL
ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
