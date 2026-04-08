# ---- Builder Stage ----
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies needed for the build.
COPY package*.json ./
RUN npm install

# Copy source files.
COPY . .

# Build the Next.js app.
RUN npm run build

# ---- Production Stage ----
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=9000
ENV HOSTNAME=0.0.0.0

# Copy the standalone output produced by Next.js.
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 9000

# Start the standalone server.
CMD ["node", "server.js"]
