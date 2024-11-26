#!/bin/sh
# Simple script initialize jugaripunt on Alpine Linux VM

# SYSTEM
addgroup -S jugaripunt
adduser \
    -S \
    -D \
    -H \
    -h /dev/null \
    -s /sbin/nologin \
    -G jugaripunt \
    -g jugaripunt \
    jugaripunt

apk add --virtual .build-deps   nodejs npm
apk add --virtual .project-deps caddy postgresql py3-django py3-django-cors-headers py3-django-rest-framework py3-gunicorn py3-psycopg2 python3

# DATABASE
rc-service postgresql start
printf "%s\n" \
    "local   all             jugaripunt                               peer" \
    >> /etc/postgresql/pg_hba.conf
psql -f ./config/create_database.sql
rc-service postgresql stop

# BACKEND
python ./backend/manage.py migrate
python ./backend/manage.py collectstatic --noinput

# FRONTEND
printf "%s\n" \
    "NUXT_PUBLIC_API_BASE_URL=https://jugaripunt.eudald.gr" > ./frontend/.env

NUXT_TELEMETRY_DISABLED=1 npm install --prefix ./frontend
NUXT_TELEMETRY_DISABLED=1 npm run generate --prefix ./frontend

# Deploy
mkdir -p /var/www/jugaripunt /var/lib/jugaripunt

cp -r ./frontend/.output/public/* /var/www/jugaripunt
cp -r ./backend/* /var/lib/jugaripunt

cp ./config/init.sh /etc/init.d/jugaripunt
chmod +x /etc/init.d/jugaripunt

cp ./config/Caddyfile /etc/caddy/Caddyfile

rc-update add jugaripunt
rc-service jugaripunt start

# Clean up
apk del .build-deps
