pipeline {
  agent {
      docker {
          image 'node:lts-bullseye-slim' 
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
        sh './build.sh'
      }
    }

  }
  environment {
    PORT = '3000'
  }
}
