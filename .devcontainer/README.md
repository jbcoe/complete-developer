# Dev Container Setup

This project includes dev container configurations for JavaScript/React development.

## Configuration Options

### Option 1: Simple Dev Container (Recommended)
Uses `devcontainer.json` with a pre-built Microsoft image.

### Option 2: Docker Compose Setup
Uses `devcontainer.compose.json` with `docker-compose.yml` and custom `Dockerfile`.
Includes PostgreSQL database for full-stack development.

## Getting Started

1. **Install Prerequisites:**
   - [Docker Desktop](https://www.docker.com/products/docker-desktop)
   - [Visual Studio Code](https://code.visualstudio.com/)
   - [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

2. **Open in Dev Container:**
   - Open this folder in VS Code
   - Press `F1` and select "Dev Containers: Reopen in Container"
   - Or click the popup notification to reopen in container

3. **Choose Configuration:**
   - By default, it uses `devcontainer.json` (simple setup)
   - To use Docker Compose setup, rename `devcontainer.compose.json` to `devcontainer.json`

## Features Included

### VS Code Extensions
- TypeScript support
- ESLint & Prettier for code formatting
- Tailwind CSS IntelliSense
- Path IntelliSense
- Auto Rename Tag
- Live Server
- React Native support

### Development Tools
- Node.js 20.x
- npm, yarn, and pnpm package managers
- Git and GitHub CLI
- Common React development tools

### Port Forwarding
- Port 3000: React development server
- Port 3001: Alternative React server
- Port 5000: Express.js server
- Port 5173: Vite development server
- Port 8080: General web server
- Port 5432: PostgreSQL (Docker Compose setup only)

## Creating a New React App

Once inside the dev container, you can create a new React app:

```bash
# Using Create React App
npx create-react-app my-app
cd my-app
npm start

# Using Vite (faster alternative)
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

## Notes

- The container runs as the `node` user (non-root)
- Your workspace files are mounted and changes persist
- All dependencies are installed automatically via `postCreateCommand`
- The container includes PostgreSQL for full-stack development (Docker Compose setup)

## Troubleshooting

- If the container fails to build, try rebuilding: `F1` → "Dev Containers: Rebuild Container"
- For permission issues, ensure Docker has access to your workspace folder
- Check Docker Desktop is running and has sufficient resources allocated
