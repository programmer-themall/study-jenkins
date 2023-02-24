pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git(url: 'https://github.com/programmer-themall/study-jenkins.git', branch: 'main')
      }
    }

    stage('Log') {
      parallel {
        stage('Log') {
          steps {
            sh 'ls -a'
          }
        }

        stage('Install node_module') {
          steps {
            sh 'npm i'
          }
        }

      }
    }

    stage('Build') {
      steps {
        sh 'docker build -f Dockerfile .'
      }
    }

    stage('Push to Docker Hub Repo') {
      steps {
        sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'
      }
    }

  }
  environment {
    DOCKERHUB_USERNAME = 'jenwitkmonz@gmail.com'
    DOCKERHUB_PASSWORD = '9ZnHUhfo0HFUx3NW'
  }
}