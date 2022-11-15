# Prueba Técnica Desarrollador Full Stack (Frontend)

Aplicación/API de lado del Frontend que consumirá api de datos gob backend.

## Requisitos

Los aspectos considerados son:
- [x] Desarrollo de api para la resolución de la prueba técnica.

Tecnologías usadas en el desarrollo de la api:
- [x] Javascript.
- [x] Docker.
- [x] Docker compose.
- [x] Entorno de desarrollo Unix (Recomendado), aunque también se puede en Wsl2 de windows.
- [x] Tener la API corriendo en el puerto 5555.

Consideraciones específicas previas:
Al levantar esta aplicación se considera que la API Backend ya se encuentre en ejecución y exponiendo el servicio rest a través del puerto 5555.

## Instalación

Instalación de dependencias. Ejecutamos:
```
npm install
npm install jquery jquery-ui
```

Servir aplicación. Ejecutamos:
```
npm run dev
```

## Troubleshooting (Opcional)

### package-lock.json
En caso de requerir una instalación limpia fuera de lo que fue la instalación para las dependencias, favor eliminar el archivo package-lock.json.

```
rm -rf package-lock.json
```

### node-sass
En algunas distribuciones esta librería puede causar mas de un error, para corregir las dependencias asociadas a node-sass favor seguir las siguientes instrucciones:

(Aunque la mejor solucion, es usar una version estable de node)


```
npm config set package-lock false
npm config set package-lock true

npm rebuild node-sass

npm install -g --unsafe-perm node-sass --save

npm install --save-dev sass sass-loader@10 fibers

npm install --save-dev node-sass node-gyp

npm i -g npm
```
