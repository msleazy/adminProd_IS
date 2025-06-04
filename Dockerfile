# Etapa 1: build
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY . .

# Ejecuta el compilador directamente
RUN npx tsc

# Etapa 2: producción
FROM node:18-slim AS production

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

EXPOSE 4000

CMD ["node", "dist/index.js"]
