#!/bin/bash

# Instalacion de docker compose
sudo curl -L "https://github.com/docker/compose/releases/download/2.2.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

echo "alias dc='docker-compose'" >> ~/.bashrc
echo "alias dce='docker-compose exec'" >> ~/.bashrc
echo "alias dcl='docker-compose logs'" >> ~/.bashrc
echo "alias dclf='docker-compose logs -f'" >> ~/.bashrc
echo "alias dcup='docker-compose up'" >> ~/.bashrc
echo "alias dcdown='docker-compose down'" >> ~/.bashrc
echo "alias dcstop='docker-compose stop'" >> ~/.bashrc

source ~/.bashrc