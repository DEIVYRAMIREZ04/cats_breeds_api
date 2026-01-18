# Imagen base ligera con Node 20
FROM node:20-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiamos package.json y package-lock.json para cachear instalación de dependencias
COPY package*.json ./

# Instalamos dependencias de producción
RUN npm install --omit=dev

# Copiamos el resto del proyecto
COPY . .

# Compilamos TypeScript (si usas TS)
RUN npm run build

# Exponer puerto de NestJS
EXPOSE 3000

# Arranque con Node apuntando a dist
CMD ["node", "dist/main.js"]
