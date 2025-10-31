FROM node:20-alpine AS builder
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY pnpm-lock.yaml* package.json ./
RUN pnpm install
COPY . .
RUN npx prisma generate
RUN pnpm build

FROM node:20-alpine
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY pnpm-lock.yaml* package.json ./
RUN pnpm install --prod
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/dist ./dist
RUN npx prisma generate
CMD ["node", "dist/main.js"]
