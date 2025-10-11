# Gunakan image Node resmi (alpine = ringan)
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy file dependency
COPY package*.json ./

# Install dependencies (gunakan npm ci untuk kecepatan)
RUN npm ci

# Copy seluruh kode project
COPY . .

# Build project Next.js (Next.js 15 → output standalone)
RUN npm run build

# ==========================
# Stage: Production runner
# ==========================
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy hasil build standalone agar image ringan
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

# Jalankan server standalone bawaan Next.js 15
CMD ["node", "server.js"]
