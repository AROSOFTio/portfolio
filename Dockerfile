# ---- Builder Stage ----
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies (including dev for build)
COPY package.json ./
RUN npm install

# Copy source files
COPY . .

# Build the Next.js app
RUN npm run build

# ---- Production Stage ----
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=9000

# Copy only the necessary files from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/next-env.d.ts ./next-env.d.ts
COPY --from=builder /app/tsconfig.json ./tsconfig.json

# Install only production dependencies
RUN npm ci --omit=dev && npm cache clean --force

EXPOSE 9000

# Start the app
CMD ["npm", "run", "start"]
