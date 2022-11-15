
# App Wapii Porticos

## Configuración e Instalación en Desarrollo

### Paso 1: Lectura de Requisitos Previos

- [x] Make
- [x] SO basado en Debian o Debian 11

#### Paso 2 : Instalación de dependencias base en el sistema operativo o máquina virtual

Para poder usar los programas habilitados por make es necesario instalar las dependencias necesarias para su ejecucución.
Para ello nos dirigimos al subdirectorio dockerfiles/bin.d.
Otorgamos permisos de ejecución al archivo init_deps_install.sh y luego lo ejecutamos.

```
cd dockerfiles/bin.d
chmod +x init_deps_install.sh
./init_deps_install.sh
```

Este script instalará lo escencial para poder ejecutar make y los programas creados.

#### Paso 3 : Instalación de CUPS y CUPS PDF impresora local o por defecto en el sistema.

En el mismo subdirectorio ingresado anteriormente dockerfiles/bin.d.
Otorgamos permisos de ejecución al archivo cups_install.sh y luego lo ejecutamos.

```
chmod +x cups_install.sh
./cups_install.sh
```

### Paso 4: Instalación de programas con Make

El fichero makefile tiene los siguientes programas disponibles:
```
docker: install_docker
dockercompose: install_docker_compose
npm: install_npm
local: app_wapii_view_local
runlocal: run_app_wapii_view_local
testprinter: test_printer
```
Por lo tanto, para instalar es necesario seguir ese orden, basta con ejecutar lo siguiente en la linea de comandos:

##### Instalar docker
```
make docker
```

##### Instalar docker-compose
```
make dockercompose
```

##### Instalar nodejs y npm
```
make npm
```

##### Instalar aplicación
```
make local
```

##### Levantar aplicación instalada
```
make runlocal
```

##### Realizar una prueba de impresión a la impresora por defecto
```
make testprinter
```
