# Build stage
FROM node:20-alpine AS build-stage

WORKDIR /app

# Enable Corepack for Yarn Berry support
RUN corepack enable

# Copy dependency files
COPY package.json yarn.lock .yarnrc.yml ./
# Copy .yarn folder for plugins/releases if they exist
COPY .yarn ./.yarn

# Install dependencies with frozen lockfile
RUN yarn install --immutable

# Copy source code
COPY . .

# Build the project
RUN yarn build

# Production stage
FROM nginx:stable-alpine AS production-stage

# Copy built assets to Nginx
# Note: Vite defaults to 'dist', but some configurations might use 'docs'
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
