# Frontend build stage
FROM node:latest AS frontend-builder

WORKDIR /app/KSP Dashboard final/frontend

COPY frontend/package*.json ./

RUN npm install

COPY /app/KSP Dashboard final/frontend .

RUN npm run build

# Backend build stage
FROM node:latest AS backend-builder

WORKDIR /app/backend

COPY package*.json ./

RUN npm install

COPY . .

# Final image
FROM node:latest

WORKDIR /app

COPY --from=frontend-builder /app/KSP Dashboard final/frontend/build ./frontend/build
COPY --from=backend-builder /app .

EXPOSE 3000

CMD ["npm", "run", "dev"]
