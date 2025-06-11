# JS Profile App (Dockerized)

This project is a simple Node.js application that serves a personal profile page, stores user data in a MongoDB database, and provides a web UI using Mongo Express.

## 💻 Technologies Used
- Node.js + Express
- MongoDB
- Mongo Express
- Docker & Docker Compose

## 🐳 Project Setup

This project runs three services in containers:
1. `app`: Node.js server running on port 3000
2. `mongodb`: Database running on port 27017
3. `mongo-express`: DB UI running on port 8081

### Start the project:

```bash
docker-compose down -v  # optional clean-up
docker-compose up --build

## 🚀 Access Locally

Once all containers are up and running:

- Visit the Node.js profile app: [http://localhost:3000](http://localhost:3000)
- View MongoDB data with Mongo Express: [http://localhost:8081](http://localhost:8081)

To test:
1. Submit user data through the form on `/`.
2. Visit `/get-profile` to retrieve user data.
3. Open Mongo Express to confirm data persistence under `user-account > users`.
