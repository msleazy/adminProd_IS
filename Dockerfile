# Etapa 1: build
FROM node:18 AS build

WORKDIR /app

# Copiar archivos base
COPY package*.json ./
COPY tsconfig.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Asegurar que el compilador tsc tenga permisos y compilar
RUN chmod +x ./node_modules/.bin/tsc && npm run build

# Etapa 2: producción
FROM node:18-slim AS production

WORKDIR /app

# Copiar solo lo necesario desde la etapa de build
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

# Exponer el puerto de tu app
EXPOSE 4000

# Comando para iniciar el servidor
CMD ["node", "dist/index.js"]
