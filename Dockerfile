#STAGE 1
FROM node:latest AS build
# install angular cli to run ng-build
WORKDIR /usr/src/app
RUN npm i @angular/cli

# copy all file to build the app
WORKDIR /usr/src
# copy LIBS to npm/ folder
COPY LIB/npm/lbox-shared.tgz LIB/npm/lbox-auth.tgz ./npm/
# copy package.json to app/ folder
COPY LMath.App/package.json LMath.App/package-lock.json ./app/
# run `npm install` in app/ folder
WORKDIR /usr/src/app
RUN npm install
COPY LMath.App/. .
RUN npm run build-prod

#STAGE 2
FROM nginx:latest
COPY LMath.App/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/lmath-app /usr/share/nginx/html
