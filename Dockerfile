FROM debian:latest AS base

WORKDIR /app

    
COPY package*.json ./
COPY .npmrc ./
EXPOSE 3000


FROM base AS builder
COPY ./ ./
RUN npm run build


FROM base AS prod
WORKDIR /app

ENV NODE_ENV=production
RUN npm ci


COPY --from=builder  /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

CMD ["npm", "run", "start"]

FROM base AS dev
RUN npm install
COPY . .

CMD ["npm", "run", "dev"]