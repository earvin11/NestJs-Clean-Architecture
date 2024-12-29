<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Sprint Race API

## Descripcion

Esta API ha sido desarrollada para manejar el backend del juego SPRIN RACE de la empresa SprintGamming,
se utilizo la arquitectura hexagonal con vertical slicing dentro del framework NestJs

## Instalacion del proyecto

```bash
$ npm install
```

Clonar el archivo `.env.template` y renombrar a `.env`

Cambiar las variables de entorno

Levantar la base de datos

```bash
$ docker compose up -d
```

## Compile y ejecute el proyecto en base al entorno

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Documentacion en linea

Abra el navegador en la URL: http://localhost:3000/api

Ajuste el dominio y el puerto de ser necesario.
