FROM node:8-alpine as build
WORKDIR /ghofi-profile
# The official image has verbose logging; change it to npm's default
ARG space=dev
ENV NPM_CONFIG_LOGLEVEL notice
# Add packages
ENV PACKAGES="libpng-dev"
RUN apk add --no-cache $PACKAGES
# Add NPM package config
COPY package*.json /ghofi-profile
# Add temporary packages, and build the NPM packages/binaries
ENV EPHEMERAL_PACKAGES="autoconf automake g++ libtool make nasm python git"
RUN apk add --no-cache --virtual .tmp $EPHEMERAL_PACKAGES \
  && npm i \
  && apk del .tmp
# Add the remaining project files
COPY . /ghofi-profile
# Build distribution
RUN yarn clean
RUN yarn build-static-$space
# build container
FROM nginx:1.16.0-alpine
COPY --from=build /ghofi-profile/dist/public /var/www
CMD ["nginx", "-g", "daemon off;"]