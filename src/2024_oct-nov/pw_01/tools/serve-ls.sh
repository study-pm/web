#!/bin/bash

DIR_PATH="$(dirname "$0")"

source $DIR_PATH/CONS.sh

printFormat "Copying resources..." $BLUE

cp -r ./css/ ./front_js/ && cp -r ./js/ ./front_js

printFormat "Launching Live server..." $BLUE

$DIR_PATH/../node_modules/live-server/live-server.js --open=$DIR_PATH/../front_js
