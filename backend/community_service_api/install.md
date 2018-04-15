Prerequeisites:
- python3
- pip
- virtualenv

Make a python3 virtualenv and start it
`$ virtualenv -p python3 venv`
`$ . venv/bin/activate`
`$ pip install -r requirements.txt`

Setup postgressql
$ sudo -u postgres psql
`postgres=# CREATE DATABASE communityservice;`
`postgres=# CREATE USER comserv WITH PASSWORD 'password';`
`postgres=# ALTER ROLE comserv SET client_encoding TO 'utf8';`
`postgres=# ALTER ROLE comserv SET default_transaction_isolation TO 'read committed';`
`postgres=# ALTER ROLE comserv SET timezone TO 'UTC';`
`postgres=# GRANT ALL PRIVILEGES ON DATABASE communityservice TO comserv;`
`postgres=# \q`

Setup local.env
`$ cp community_service_api/local_env_template.txt community_service_api/local.env`
Fill in local.env settings
export DB_NAME='communityservice'
export DB_USERNAME='comserv'
export DB_PASSWORD='password'
`$ . community_service_api/local.env`
