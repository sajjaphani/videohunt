#!/bin/bash

# As of 3.3.0, react-scripts does not support passing cert paths, 
# may not require this copying once we can pass the certificates

if [ -L ${BASH_SOURCE-$0} ]
then 
  SCRIPT_HOME=$(dirname $(readlink "${BASH_SOURCE-$0}")) 
else
  SCRIPT_HOME=$(dirname "${BASH_SOURCE-$0}") 
fi

HOME="`cd "$SCRIPT_HOME/../"; pwd`"
TARGET_LOCATION=$HOME/node_modules/webpack-dev-server/ssl/server.pem

if [ ! -z $1 ]
then
  SOURCE_LOCATION="$1"
else
  SOURCE_LOCATION=$HOME/certs/server.pem
  if [ ! -f $SOURCE_LOCATION ]
  then 
    PARENT="`cd "$HOME/../"; pwd`"
    SOURCE_LOCATION=$PARENT/certs/server.pem
  fi
fi

rm -f ${TARGET_LOCATION} || true

if [ -f $SOURCE_LOCATION ]
then
  echo Copying ${SOURCE_LOCATION} TO ${TARGET_LOCATION}
    cp -f $SOURCE_LOCATION $TARGET_LOCATION
    chmod 400 ${TARGET_LOCATION}
else
  echo 'server.pem' Not Found '@' ${SOURCE_LOCATION} 
fi
