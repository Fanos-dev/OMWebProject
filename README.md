# OM Tech Assessment

A Spring Boot REST API with a Next.js frontend. The backend exposes country data through a generated OpenAPI contract. The frontend then consumes it and renders the UI.

## Prerequisites

- Git
- **Docker** for the recommended setup below
- Java 17 + Node.js 22: Only needed for manual local setup

## Docker (recommended)

From the project root, build and start both services with a single command:

```bash
docker compose up --build
```

To stop everything:

```bash
docker compose down
```

## 

---
## URLs

| Service | URL |
|---------|-----|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:8081 |
| Swagger UI | http://localhost:8081/swagger-ui.html |

---

## Manual Setup

## Backend

Run these from the `backend\` folder.

There is also a Bruno collection to test the endpoints

```bat
- For first time runs you must download dependencies and compile the project
mvn clean package -DskipTests

- Start the server
Run the java file `BackendApplication.java` to start the server in your IDE
```

The API starts on port **8081**.

## Frontend

Run these from the `frontend\` folder.

```bat
- For first time runs, copy and rename the env file and set the backend URL
copy .env.example .env.local

- Install dependencies
npm install

- Start the dev server
npm run dev
```

The app starts on port **3000**.

## Running both

The frontend proxies all `/api/*` requests to the backend, so **start the backend first**.