#!/bin/sh

# Check if the certificate already exists
if [ ! -f "/etc/letsencrypt/live/jeniaincodeland.com/fullchain.pem" ]; then
  echo "Certificate not found. Attempting to obtain a new certificate..."
  certbot certonly --webroot --webroot-path=/var/www/certbot --email esskimosa@gmail.com \
      --agree-tos --no-eff-email \
      -d jeniaincodeland.com \
      --post-hook "docker restart frontend"
fi

# Run the renewal loop with Nginx reload
trap exit TERM
while :; do
  certbot renew --deploy-hook 'docker restart frontend'
  sleep 12h & wait $!
done