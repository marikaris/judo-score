# Docker Configuration

This directory contains the Docker configuration for the Judo Score Board.

## Files

- `Dockerfile`: Multi-stage build (Node 20 -> Nginx).
- `docker-compose.yml`: Orchestration for local deployment.
- `.dockerignore`: Files to exclude from the Docker build context.

## Usage

### Using Docker Compose (Recommended)

From the **project root**:
```bash
docker-compose -f docker/docker-compose.yml up --build
```

Alternatively, from the **docker directory**:
```bash
cd docker
docker-compose up --build
```

The application will be available at [http://localhost:8080](http://localhost:8080).

### Using Docker CLI

From the **project root**:
```bash
docker build -t judo-score -f docker/Dockerfile .
docker run -p 8080:80 judo-score
```

## Note on Build Context
The build context is set to the project root (`..` in the compose file) to ensure all source files and dependencies are available during the build process.
