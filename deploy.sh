#!/usr/bin/env bash

set -ex
git pull --rebase origin master
cd frontend
CYPRESS_INSTALL_BINARY=0 npm install --production=false
npm run build
cd ..
docker-compose stop
docker-compose up -d
