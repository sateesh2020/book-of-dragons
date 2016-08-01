## Book of Dragons - Docker Application

Book of Dragons is a Web Application of Dragons and Vikings Wiki Data from the famous TV Series DreamWorks Dragons

DreamWorks Dragons is an American computer-animated television series based on the 2010 film How to Train Your Dragon. The series serves as a bridge between the first film and its 2014 sequel, showing every step of the plot and revealing the secrets the movies did not tell.

This application is built by Using Angular & Bootstrap for Web Development, Node for API development and Mongo DB to store the Data.

### Docker Images using

  *	nginx:1.11.1-alpine         - For Web Application
  * mhart/alpine-node:4.4       - For API (Node)
  * mongo:3.3.8                 - For Database

### Docker Compose File

```sh

version: '2'

services:
  web:
    build: web
    ports: ["80:80"]
    volumes: ["./web/static:/usr/share/nginx/html"]
    restart: always

  book-api:
    build: book-api
    ports: ["3005:3005"]

  mongo:
    image: mongo:3.3.8

```

### Running Application

**Build**

```sh

docker-compose build

```

**Run**

```sh

docker-compose up

```

**Stop Containers**

```sh

docker-compose kill

```

**Stop and Remove Containter**

```sh

docker-compose down

```
**List of Containers**

```sh

docker-compose ps

docker-compose ps -a

```
