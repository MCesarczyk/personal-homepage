FROM node:22.12.0-alpine3.20 AS base

ARG NODE_ENV=production
ARG REACT_APP_GITHUB_ACCOUNT_URL
ARG REACT_APP_GITHUB_API_TOKEN

ENV NODE_ENV=$NODE_ENV
ENV REACT_APP_GITHUB_ACCOUNT_URL=$REACT_APP_GITHUB_ACCOUNT_URL
ENV REACT_APP_GITHUB_API_TOKEN=$REACT_APP_GITHUB_API_TOKEN
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable && corepack install --global pnpm@latest
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

COPY . /app
WORKDIR /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build:dev

FROM base AS development
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build
EXPOSE 3000
CMD [ "pnpm", "start" ]

FROM nginx:1.26.2-alpine3.20 AS production
COPY --from=build /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
