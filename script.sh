#!/bin/sh
# Simple script initialize jugaripunt on Alpine Linux VM
set -x

# Install packages
doas apk add --virtual .project-deps caddy gcc gdal git libpq-dev musl-dev nodejs npm postgresql py3-pip python3 python3-dev

# Clone repository
cd /tmp || exit

git clone --branch eudaldgr https://github.com/jugaripunt/jugaripunt.git

cd jugaripunt || exit

# Create database
doas rc-service postgresql start
doas rc-update add postgresql
doas -u postgres psql -f create_database.sql

# Install python dependencies
python -m venv ./venv
# shellcheck source=/dev/null
. ./venv/bin/activate
pip install -r ./backend/requirements.txt

# Run migrations
python ./backend/manage.py migrate

# Collect static files
python ./backend/manage.py collectstatic --noinput

# Run backend
python ./backend/manage.py runserver

# Install node dependencies
npm install --omit=dev --omit=optional --prefix ./frontend

# Build frontend
npm run generate --prefix ./frontend

# Deploy static files
cp -r ./frontend/output/public/* /var/www/jugaripunt

# Deploy Caddyfile
cp ./Caddyfile /etc/caddy/Caddyfile

# Start Caddy
doas rc-service caddy start