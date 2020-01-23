#!/bin/bash

SOURCE="${BASH_SOURCE[0]}"
if [ -L ${SOURCE} ]
then
  SCRIPT_HOME=$(dirname $(readlink "${SOURCE}")) 
else
  SCRIPT_HOME=$(dirname "${SOURCE}") 
fi

HOME="`cd "$SCRIPT_HOME/../"; pwd`"

mkdir -p ${HOME}/certs

openssl req -x509 -out ${HOME}/certs/server.crt -keyout ${HOME}/certs/server.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name=dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")

#Generate PEM file
cat ${HOME}/certs/server.crt ${HOME}/certs/server.key > ${HOME}/certs/server.pem
