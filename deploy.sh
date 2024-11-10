#!/bin/sh
# Simple script initialize jugaripunt on Alpine Linux VM
set -x

# Create the jugaripunt user/group
doas addgroup -S jugaripunt
doas adduser \
    -S \
    -D \
    -H \
    -h /dev/null \
    -s /sbin/nologin \
    -G jugaripunt \
    -g jugaripunt \
    jugaripunt

# Install packages
doas apk add --virtual .build-deps   git npm
doas apk add --virtual .project-deps caddy nodejs postgresql py3-django py3-django-cors-headers py3-django-rest-framework py3-gunicorn py3-psycopg2 python3

# Clone repository
cd /tmp || exit

git clone --branch eudaldgr https://github.com/jugaripunt/jugaripunt.git

cd jugaripunt || exit

# Create database
doas rc-service postgresql start
doas rc-update add postgresql
printf "%s\n" \
    "local   all             jugaripunt                               peer" \
    | doas tee -a /etc/postgresql/pg_hba.conf
doas -u postgres psql -f ./config/create_database.sql

# Run migrations
python ./backend/manage.py migrate

# Make static files
python ./backend/manage.py collectstatic --noinput

# Install node dependencies
NUXT_TELEMETRY_DISABLED=1 npm install --prefix ./frontend

# Create .env file https://jugaripunt.eudald.gr is an example
printf "%s\n" \
    "NUXT_PUBLIC_API_BASE_URL=https://jugaripunt.eudald.gr" > ./frontend/.env

# Build frontend
NUXT_TELEMETRY_DISABLED=1 npm run generate --prefix ./frontend

# Create directories
doas mkdir -p /var/www/jugaripunt /var/lib/jugaripunt

# Deploy static files
doas cp -r ./frontend/.output/public/* /var/www/jugaripunt

# Deploy backend
doas cp -r ./backend/* /var/lib/jugaripunt

# Deploy init script
doas cp ./config/init.sh /etc/init.d/jugaripunt
doas chmod +x /etc/init.d/jugaripunt

# Start jugaripunt
doas rc-service jugaripunt start
doas rc-update add jugaripunt

# Deploy Caddyfile
doas cp ./config/Caddyfile /etc/caddy/Caddyfile

# Start Caddy
doas rc-service caddy start

# Clean up
doas apk del .build-deps