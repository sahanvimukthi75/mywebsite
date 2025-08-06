# Use the official Node.js image from the Docker Hub
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies and rebuild bcrypt from source
RUN npm install -g nodemon \
    && npm install \
    && npm rebuild bcrypt --build-from-source

# Copy the rest of your application code to the working directory
COPY . .

# Expose the port your application runs on
EXPOSE 3002

# Command to run your application
CMD ["npm", "start"]
