#!/bin/bash
sed -i "s|OIL_REQUEST_HOST|${OIL_REQUEST_HOST}|g" `grep "OIL_REQUEST_HOST" -rl /usr/share/nginx/html/dist`
nginx -g 'daemon off;'