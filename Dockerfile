# Etapa 1: build
FROM node:18 AS build

WORKDIR /app

# Copiamos solo lo necesario para instalar dependencias y compilar
COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

# Copiamos el resto del código fuente
COPY . .

# Ejecutamos el compilador de TypeScript directamente con npx
RUN npx tsc

# Etapa 2: producción
FROM node:18-slim AS production

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

# Exponemos el puerto que usa el backend
EXPOSE 4000

# Comando que se ejecuta al iniciar el contenedor
CMD ["node", "dist/index.js"]
