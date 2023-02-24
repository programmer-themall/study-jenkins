pipeline {
  agent {
    docker {
      image 'node:18.14'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Checkout') {
      steps {
        git(url: 'https://github.com/programmer-themall/study-jenkins.git', branch: 'main')
      }
    }

    stage('Build') {
      steps {
        sh '''node -v
npm -v'''
      }
    }

  }
}