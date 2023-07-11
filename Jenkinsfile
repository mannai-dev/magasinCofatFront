pipeline {
    agent any

    stages {
        stage("Getting code from SCM") {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[credentialsId: 'github', url: 'https://github.com/mannai-dev/magasinCofatFront']]])
            }
        }

        stage("Building Angular app") {
            steps {
                sh 'npm install'
                sh 'npm run build -- --prod'
            }
        }

        stage("Testing") {
            steps {
                sh 'npm run test'
            }
        }

        stage("Code QualityCheck Sonar") {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh 'npm run sonar'
                }
            }
        }

        stage("Building Docker image") {
            steps {
                sh 'docker build -t mannai3/pfe:angular .'
            }
        }

        stage("Pushing to Docker Hub") {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh "echo $PASS | docker login -u $USER --password-stdin"
                    sh 'docker push mannai3/pfe:angular'
                }
            }
        }

        stage("Deploy with Docker Compose") {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}
