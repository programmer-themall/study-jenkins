FROM node:18.12.1-buster-slim
WORKDIR /app
COPY . ./

# Use yarn 3 for package management
RUN corepack enable

# Install packages
RUN yarn

COPY . .

# Setting the environment variable NODE_ENV to production.
ENV NODE_ENV=production

# Build Script
RUN yarn build

# Expose port 5000
EXPOSE 3000

# Running the start script in the package.json file.
CMD ["yarn", "start"]