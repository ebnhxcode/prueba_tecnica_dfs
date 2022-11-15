SHELL := /bin/bash

##############################
# Programas
##############################

# Lista de programas disponibles
docker: install_docker
dockercompose: install_docker_compose
npm: install_npm
local: app_local
runlocal: run_app_local
testprinter: test_printer


##############################
# Install Docker
##############################

install_docker:
	cd dockerfiles/bin.d;\
	chmod +x docker_install.sh;\
	./docker_install.sh


##############################
# Install Docker Compose
##############################

install_compose_docker:
	cd dockerfiles/bin.d;\
	chmod +x docker_compose_install.sh;\
	./docker_compose_install.sh

##############################
# Install Npm & Node
##############################

install_npm:
	cd dockerfiles/bin.d;\
	chmod +x npm_install.sh;\
	./npm_install.sh


##############################
# Build Local
##############################

app_local: \
	build.local

build.local:
	cd app;\
	npm i -D;\
	npm install jquery jquery-ui;\
	npm run build;\
	npm run generate;\
	rm -rf ../builded;\
	mkdir -p ../builded;\
	mv dist/* ../builded


##############################
# Run Local
##############################

run_app_local: \
	setup.local \
	run.local

setup.local:
	docker-compose up -d --build app;\
	docker-compose stop app;

run.local:
	docker-compose up -d app
	
##############################
# Test Printer
##############################

test_printer: \
	test.printer

test.printer:
	touch testfile.txt;\
	echo "This is a test printer file" > testfile.txt;\
	lp -d PDF testfile.txt