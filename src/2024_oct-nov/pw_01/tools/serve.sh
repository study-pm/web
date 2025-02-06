#!/bin/bash
DIR_PATH="$(dirname "$0")"

source $DIR_PATH/utils.sh
source $DIR_PATH/CONSOLE.sh

if [ -z "$1" ];
    then source "$DIR_PATH/serve-ls.sh"
elif [ $1 = "php" ]
    then source "$DIR_PATH/serve-php.sh"
else
    printFormat "Error: Unknown parameter" $RED
fi
