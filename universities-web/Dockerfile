# Stage 1: Build and test
FROM node:18 AS build

# Create and change to the app directory.
WORKDIR /app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install production dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

# Run tests
RUN npm test

# Stage 2: Create final image
FROM node:18

# Create and change to the app directory.
WORKDIR /app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install production dependencies.
RUN npm install --production

# Copy only the necessary files from the build stage
COPY --from=build /app ./

# Inform Docker that the container is listening on the specified port.
EXPOSE 3000

# Run the web service on container startup.
CMD ["npm", "run", "dev"]
