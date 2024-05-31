# Use an official Node runtime as the base image
FROM node:14

# Set the working directory in the Docker image
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

RUN npm build

# Bundle the app source inside the Docker image
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Define the command to run the app
CMD [ "node", "index.js" ]