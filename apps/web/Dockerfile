# -------------------
# Stage: development
# -------------------
FROM node:18-alpine AS development

# Install pnpm globally
RUN npm install -g pnpm

# Create and switch to the app directory
WORKDIR /app

# Copy and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy the rest of the source code
COPY . .

# Expose Vite’s default port
EXPOSE 5173

# Command for local development
CMD ["pnpm", "dev"]

# -------------------
# Stage: build
# -------------------
FROM node:18-alpine AS build

# Install pnpm globally
RUN npm install -g pnpm

WORKDIR /app

# Copy and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy the rest of the source code
COPY . .

# Build the production bundle
RUN pnpm build

# -------------------
# Stage: production
# -------------------
FROM nginx:stable-alpine

# Copy build artifacts from the "build" stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 (default for NGINX)
EXPOSE 80

# Run NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
