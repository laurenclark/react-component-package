# react V2 Components Package

First off, you need to verify if you have Docker installed by running this command in your console.

`docker -v`

If not, refer to the [Docker installation documents](https://docs.docker.com/get-docker/).

### To Run Locally via Docker (Mac)

> Note: We need the local node_modules folder for linting and TypeScript - otherwise they will not be able to find and import dependences, and this will throw errors. If you don't need to edit any files, you can skip this step.

Node Version: `Node v16.15.1`

[Installing Node via NVM for Mac](https://amanhimself.dev/blog/install-nodejs-using-nvm-on-macos-m1/)


Run the following to install dependencies.

### 👀  Note: All commands can and should be run from the root including the Docker & Make commands 👀


```
npm install
```

----

> Build and run **dev** container

You can now start the development and your local application will be available here: http://localhost:3010/

```
make up
```

> Stop and remove **dev** container

``` 
make down
```

> Docker Logs

```
make logs
```

> Docker Shell

```
make shell
```

---

### To Run Locally via Docker (Windows)

> Note: We need the local node_modules folder for linting and TypeScript - otherwise they will not be able to find and import dependences, and this will throw errors. If you don't need to edit any files, you can skip this step.

Node Version: `Node v16.15.1`

[Installing Node for Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows)


Run the following to install dependencies.

*Note: All commands can and should be run from the root including the Docker & Make commands*


```
npm install
```

----

> Build and run **dev** container

```
docker compose -p react-frontend -f docker/docker-compose.yml --env-file .env up -d
```

> Stop and remove **dev** container

``` 
docker compose -p react-frontend -f docker/docker-compose.yml --env-file .env down
```

> Docker Logs

```
docker compose -p react-frontend -f docker/docker-compose.yml --env-file .env logs -f
```

> Docker Shell

```
docker compose -p react-frontend -f docker/docker-compose.yml --env-file .env exec -w /app php /bin/sh
```


---