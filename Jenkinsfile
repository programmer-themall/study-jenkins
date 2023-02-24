pipeline {
  agent {
    docker {
      image 'node:18.14'
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
}