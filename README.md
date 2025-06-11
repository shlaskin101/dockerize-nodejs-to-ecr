# Dockerize Node.js Application and Push to Amazon ECR

## 📌 Project Overview
This project demonstrates how to containerize a Node.js application using Docker and push the resulting image to a private repository on Amazon Elastic Container Registry (ECR).

---

## 🛠️ Technologies Used
- **Node.js**
- **Docker**
- **Amazon ECR (Elastic Container Registry)**

---

## 📂 Project Objectives

- Write a `Dockerfile` to build a production-grade Docker image for a Node.js app.
- Create a private Docker registry using AWS ECR.
- Authenticate with ECR and push the Docker image to your private repo.

---

## 🚀 How to Run the Project Locally

```bash
# Step 1: Clone the repo
git clone https://github.com/YOUR_USERNAME/dockerize-nodejs-to-ecr.git
cd dockerize-nodejs-to-ecr

# Step 2: Build the Docker image
docker build -t nodejs-app .

# Step 3: Run the container
docker run -p 3000:3000 nodejs-app

## 🐳 Push Docker Image to Amazon ECR
	1.	Authenticate Docker to ECR:
aws ecr get-login-password --region YOUR_REGION | docker login --username AWS --password-stdin 193668171416.dkr.ecr.us-east-2.amazonaws.com
	2.	Tag your image:
docker tag nodejs-app:latest 193668171416.dkr.ecr.us-east-2.amazonaws.com/dockerize-nodejs-to-ecr:latest
	3.	Push the image:
docker push 193668171416.dkr.ecr.us-east-2.amazonaws.com/dockerize-nodejs-to-ecr:latest

Replace all YOUR_... placeholders with actual values specific to your AWS account or GitHub username.
