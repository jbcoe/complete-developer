FROM mcr.microsoft.com/devcontainers/javascript-node:1-20-bullseye

# Install additional OS packages if needed
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
        git \
        curl \
        wget \
        vim \
        nano \
    && apt-get autoremove -y && apt-get clean -y

# Install global npm packages
RUN npm install -g \
    create-react-app \
    @vitejs/create-vite \
    serve \
    npm-check-updates \
    eslint \
    prettier

# Install pnpm and yarn as alternative package managers
RUN npm install -g pnpm yarn

# Set the default shell to bash
ENV SHELL /bin/bash
