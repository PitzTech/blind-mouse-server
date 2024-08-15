FROM node:20

# Set the working directory
WORKDIR /usr/src/api

# Copy package.json and yarn.lock first for better caching
COPY package.json yarn.lock ./

# Install dependencies
# RUN npm install -g yarn
RUN yarn install
# RUN yarn install --silent --ignore-optional --no-progress

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Command to run the application in development mode
CMD ["yarn", "start:dev"]
