#!/bin/sh

# Check if SSL certificates exist
if [ -f "/etc/letsencrypt/live/jeniaincodeland.com/fullchain.pem" ]; then
    echo "SSL certificates found, using SSL configuration."
    rm /etc/nginx/conf.d/default.conf
    cp /etc/nginx/nginx.https.conf /etc/nginx/conf.d/default.conf
else
    echo "No SSL certificates found, using non-SSL configuration."
    rm /etc/nginx/conf.d/default.conf
    cp /etc/nginx/nginx.http.conf /etc/nginx/conf.d/default.conf
fi

nginx -g 'daemon off;'