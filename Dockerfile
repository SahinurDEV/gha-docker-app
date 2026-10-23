# Small official Node image
FROM node:22-alpine
WORKDIR /app
# Copy the manifest first so this layer is cached between builds
COPY package.json ./
RUN npm install --omit=dev
COPY src ./src
ENV PORT=3000
EXPOSE 3000
USER node
CMD ["node", "src/server.js"]
