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

  }
}