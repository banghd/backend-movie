# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Set the environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose the port on which the application will listen
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
