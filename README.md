![img.png](img.png)

# GameART JavaScript Coding Task

## Task Description

Please submit the task written in JavaScript.

### Warning ⚠️

- Challenge accepted! 🤓 Yeet & Sweet! 🤙
- Task 1: Just to clarify, while I've used some of the methods requested in this challenge in unconventional ways, I
  thought it
  would be both fun and interesting to do so. 😁
- Task 2: I tried to implement "somewhat" MVC architecture, regardless of the fact that it's a simple API. No DB.

## Map, Filter, Reduce - Task 1

Input to the function is an array of integers, for example: `[24,56,1,25,67,24,89,21,53,24,56]`.

### Tasks

#### 1. Return all unique numbers, ordered from larger to smallest.

#### 2. Return all numbers, each multiplied by two.

#### 3. Return all odd numbers.

#### 4. Return sum of all numbers.

#### 5. Return sum of all numbers that are divisible by 3.

### Usage example

```shell
cd Task 1
# to run only once
npm run yeet -- 24 56 1 25 67 24 89 21 53 24 56
# development mode
npm run dev -- 24 56 1 25 67 24 89 21 53 24 56
```

## Simple Ping-Pong API - Task 2

Create a simple GET REST API with Express.js, that listens on the path `/ping` and responds
with `"pong"`

### Installation

1. **Install NodeJS**: LTS or the latest version.
2. **Install Docker** only if you want to start this project from the docker container
3. **Setup the Project**:

- In the root directory, run `npm install`.
- Create a `.env` file based on `.env.dev` inside Task 2 directory

4. **Follow the next steps below**

```shell
cd Task 2
```

- If you want to run the project from the docker container, run `docker-compose up -d`
- If you want to run the project from the host machine, run `npm run dev`

5. **Install Postman** or any other API testing tool

## Tests

- watch mode: `npm run test:watch`
- coverage: `npm run test:coverage`

## Swagger docs

- Swagger docs are available at `http://localhost:3000/docs`

## Usage example

- rate limiter is set up to 5 requests per minute
- **GET** `http://localhost:3000/`
- **GET** `http://localhost:3000/ping`
