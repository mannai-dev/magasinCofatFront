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
                sh 'npm run build --project coreui-free-angular-admin-template'

            }
        }

    /*      stage("Testing") {
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
*/
      stage("Code QualityCheck Sonar") {
    environment {
        SONAR_PROJECT_KEY = 'spring'
        SONAR_HOST_URL = 'http://localhost:9000'
        SONAR_LOGIN = 'c69bc11587eb3c42a96ef8464377a1dfdb7ee733'
    }
    steps {
        script {
            withSonarQubeEnv('SonarQube') {
                sh 'npm run sonar -Dsonar.projectKey=$SONAR_PROJECT_KEY -Dsonar.host.url=$SONAR_HOST_URL -Dsonar.login=$SONAR_LOGIN'
            }
        }
    } 
    }
        stage("Building Docker image") {
            steps {
                 sh 'docker build -t mannai3/pfe:angular -f Dockerfile-frontend .'
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
