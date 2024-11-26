#!/sbin/openrc-run
# shellcheck disable=all

: ${JUGARIPUNT_DATADIR:=/var/lib/jugaripunt}
: ${JUGARIPUNT_LOGDIR:=/var/log/jugaripunt}
: ${JUGARIPUNT_USER:=jugaripunt}
: ${JUGARIPUNT_GROUP:=jugaripunt}
: ${JUGARIPUNT_BIN:=/usr/bin/gunicorn}
: ${JUGARIPUNT_OPTS=${JUGARIPUNT_OPTS}}
: ${JUGARIPUNT_SIGTERM_TIMEOUT:=600}

JUGARIPUNT_PIDDIR="/run/jugaripunt"

name="Jugar i Punt"
description="gunicorn daemon for jugaripunt"

directory="${JUGARIPUNT_DATADIR}"
pidfile="${JUGARIPUNT_PIDDIR}/${SVCNAME}.pid"
retry="${JUGARIPUNT_SIGTERM_TIMEOUT}"

command="${JUGARIPUNT_BIN}"
command_args="--workers 3
              --bind unix:${JUGARIPUNT_PIDDIR}/jugaripunt.sock
              src.wsgi:application
              ${JUGARIPUNT_OPTS}"
command_user="${JUGARIPUNT_USER}:${JUGARIPUNT_GROUP}"
command_background="true"

start_stop_daemon_args="--stdout ${JUGARIPUNT_LOGDIR}/debug.log
                        --stderr ${JUGARIPUNT_LOGDIR}/debug.log"

depend() {
    need net postgresql caddy
    use logger dns
    after firewall
}

start_pre() {
    checkpath --directory --mode 0750 --owner "${command_user}" "${JUGARIPUNT_DATADIR}"
    checkpath --directory --mode 0755 --owner "${command_user}" "${JUGARIPUNT_LOGDIR}"
    checkpath --directory --mode 0755 --owner "${command_user}" "${JUGARIPUNT_PIDDIR}"
}