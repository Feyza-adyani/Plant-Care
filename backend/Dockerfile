# 1. Gunakan Node versi stabil
FROM node:18-alpine

# 2. Set direktori kerja
WORKDIR /app

# 3. Copy package.json
COPY package*.json ./

# 4. Install dependency
RUN npm install

# 5. Copy semua file backend
COPY . .

# 6. Expose port 4000
EXPOSE 4000

# 7. Jalankan server
CMD ["npm", "start"]

