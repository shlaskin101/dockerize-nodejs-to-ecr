# Persist Data with Docker Volumes 🐳

This project demonstrates how to persist data in a MongoDB container by attaching a Docker volume to it. This ensures your data survives container restarts or deletions.

---

## 📌 Project Overview

**Objective**  
Ensure data persistence in a Node.js + MongoDB application by using Docker Volumes.

**Technologies Used**
- Docker
- Node.js
- MongoDB

---

## 🧱 Architecture

- A **MongoDB container** is provisioned with a named Docker volume.
- A **Node.js application** connects to MongoDB and reads/writes data.
- The Docker volume ensures the database contents are retained across restarts.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/docker-volumes-node-mongo.git
cd docker-volumes-node-mongo

2. Start the containers

docker-compose up -d

This will start:
	•	The Node.js application on http://localhost:3000
	•	MongoDB on localhost:27017
	•	(Optional) Mongo Express UI on http://localhost:8081 if included

3. Test the setup

Insert some data via your app (e.g., user profile form).

Then restart the containers:

docker-compose down
docker-compose up -d

✅ Your data will persist due to the attached Docker volume.

🔍 Docker Volume Overview

In this setup, the volume is declared and mounted in the docker-compose.yaml file:

volumes:
  mongo-data:

And attached to the MongoDB service:

mongodb:
  volumes:
    - mongo-data:/data/db

This ensures that data inside /data/db (MongoDB’s default data path) is stored on your host machine.

