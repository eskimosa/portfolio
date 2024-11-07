FROM certbot/certbot

RUN apk add --no-cache docker-cli

COPY compose/prod/certbot/cert_negotiation.sh /usr/local/bin/cert_negotiation.sh

RUN chmod +x /usr/local/bin/cert_negotiation.sh