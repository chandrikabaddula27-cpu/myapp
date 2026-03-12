pipeline {
    agent any
    environment {
        DOCKER_USER = "856526"
        DOCKER_PASS = credentials('docker-hub-creds')
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/chandrikabaddula27-cpu/myapp.git', credentialsId: 'github-creds'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myapp:latest .'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'echo "No tests yet"'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                sh '''
                echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                docker tag myapp:latest $DOCKER_USER/myapp:latest
                docker push $DOCKER_USER/myapp:latest
                '''
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/deployment.yaml'
            }
        }
    }
}