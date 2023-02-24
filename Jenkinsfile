pipeline {
  agent any
  stages {
    stage('Test') {
      steps {
        sh 'whoami'
        sh 'sudo -s'
        sh 'whoami'
      }
    }

    stage('test2') {
      steps {
        sh 'whoami'
      }
    }

  }
  environment {
    DOCKERHUB_USERNAME = 'jenwitkmonz@gmail.com'
    DOCKERHUB_PASSWORD = '9ZnHUhfo0HFUx3NW'
  }
}