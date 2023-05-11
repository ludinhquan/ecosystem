# Base image
FROM node:18.16.0-alpine AS base

WORKDIR /app

# Install production dependencies
COPY package.json yarn.lock ./
RUN yarn install --production=true 

COPY prisma /app/prisma
RUN yarn generate

# Build image
FROM base AS build

# Install dev dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Build application
COPY . .
RUN yarn build

# Runtime image
FROM base AS runtime

COPY --from=build /app/dist /app/dist

EXPOSE 3000

CMD ["yarn", "start:prod"]
