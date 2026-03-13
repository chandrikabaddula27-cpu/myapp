# CI/CD Pipeline with Jenkins, Docker, Kubernetes

## Project Overview
Automated CI/CD pipeline for a Node.js application.

## Tools Used
- GitHub
- Jenkins
- Docker
- Kubernetes

## Pipeline Flow
GitHub → Jenkins → Docker Build → Docker Hub → Kubernetes Deployment

## How to Run
1. npm install
2. docker build -t myapp .
3. kubectl apply -f k8s/
