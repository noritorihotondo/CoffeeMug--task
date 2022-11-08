# CoffeeMug--task
Recruitment task for the CoffeeMug Company.

## About the App
The application is created using Express, MariaDb, Typeorm, Typescript.
The goal of the application is to perform CRUD operations on the product.

## Prerequisites
To run the app properly, it needs the following: 
- [Docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)

## Usage
Node is not required because there is a image of it in the docker container, to run application you should:

```bash
cd ./server
# You have to be in the root directory where the docker-compose.yml is located.
```
```bash
docker-compose build
```
```bash
docker-compose up
```
