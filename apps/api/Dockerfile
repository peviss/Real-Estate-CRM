# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package*.json ./
COPY pnpm-*.yaml ./
COPY tsconfig*.json ./
COPY apps/api ./apps/api

# Install dependencies
RUN pnpm install

# Build the application
RUN pnpm --filter api build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy built assets and dependencies
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/pnpm-*.yaml ./

# Expose API port
EXPOSE 3000

# Start the application
CMD ["pnpm", "--filter", "api", "start:prod"]