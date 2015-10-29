#!/bin/bash
api="https://evalua-me-rtejo-urp.c9.io/api/v1"
json="Content-Type: application/json"

if [ ! -z $3 ] 
then 
    curl -i -X $1 -H "${json}" -d ''$3'' ''$api''$2'' 2>/dev/null ; echo
else
    curl -i -X $1 -H 'Accept: application/json' ''$api''$2'' 2>/dev/null ; echo
fi
