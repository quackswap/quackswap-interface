FROM node:16.0.0 AS build

# Install essential tools
RUN apt-get -qq update && \
    apt-get -qq install sudo && \
    apt-get -qq install apt-transport-https && \
    apt-get -qq install build-essential && \
    apt-get -qq install git

# install yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get -qq install -y yarn

COPY quackswap-interface/ /usr/quackswap-interface
COPY sdk/ /usr/quackswap-sdk
COPY components/ /usr/quackswap-components

WORKDIR /usr/sdk
RUN yarn
RUN yarn build

WORKDIR /usr/components
RUN yarn
RUN yarn build
RUN rm -rf node-modules

WORKDIR /usr/quackswap-interface
RUN yarn
RUN yarn build

FROM nginx

COPY --from=build /usr/quackswap-interface/build /usr/www
COPY devops/nginx.conf /etc/nginx/nginx.conf
