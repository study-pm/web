#!/bin/bash

DIR_PATH="$(dirname "$0")"

source $DIR_PATH/CONSOLE.sh


# Add looping through params to add formatting styles

function printFormat {
    echo -e "\e[${2}m$1 \e[${ENDCOLOR}m"
}
