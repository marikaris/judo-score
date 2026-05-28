# Docker Setup

This directory contains the configuration files for containerizing the Judo Score Board application.

## How to Run

### Using Docker Compose (Recommended)

From the **project root**, run:
```bash
docker-compose -f docker/docker-compose.yml up --build
```

The application will be available at `http://localhost:8080`.

### Manual Build

From the **project root**:
```bash
docker build -t judo-score -f docker/Dockerfile .
docker run -p 8080:80 judo-score
```

---

## Configuration Details

### Dockerfile
The setup uses a **multi-stage build** to optimize the final image size:

1.  **Build Stage**:
    - Based on `node:20-alpine`.
    - Enables `corepack` to support Yarn 3+ features.
    - Installs dependencies using `yarn install --immutable`.
    - Compiles the Vue 3 application into static files in the `/dist` directory.
2.  **Production Stage**:
    - Based on `nginx:stable-alpine`.
    - Copies the compiled files from the build stage to Nginx's HTML directory.
    - Exposes port 80 and runs Nginx in the foreground.

### .dockerignore (Dockerfile.dockerignore)
Excludes local development files like `node_modules`, `.git`, and `dist` to speed up build context transfers and keep the image clean.

### docker-compose.yml
- Maps the internal port `80` to host port `8080`.
- Configured to use the project root (`..`) as the build context, ensuring all source files are accessible to the `Dockerfile`.
