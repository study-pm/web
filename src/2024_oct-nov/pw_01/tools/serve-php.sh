#!/bin/bash

DIR_PATH="$(dirname "$0")"

source $DIR_PATH/CONS.sh

printFormat "Launching Apache server" $GREEN

cd "$DIR_PATH/../"

docker-compose -f $PWD/docker-compose.yml up -d
