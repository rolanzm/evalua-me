#!/bin/bash
api="https://${C9_HOSTNAME}/api/v1"

if [[ ! -z $3 ]] 
then 
    curl -i -X $1 -H 'Accept: application/json' -H "Content-Type: application/json" -d ''"$3"'' ''$api''$2'' 2>/dev/null | sed -e 's/},/},\n/g'; echo
else
    curl -i -X $1 -H 'Accept: application/json' ''$api''$2'' 2>/dev/null | sed -e 's/},/},\n/g' ; echo
fi
