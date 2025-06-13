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