pipeline {
  agent any
  stages {
    stage('Prepare GIT Repo') {
      steps {
        echo 'Pull  main repo.'
        git(url: 'https://github.com/programmer-themall/study-jenkins.git', branch: 'main', changelog: true)
        sh 'git rev-parse HEAD'
        echo 'APIs version v1.0.0-1-20230302 : Build factor false'
      }
    }

    stage('Build Images') {
      steps {
        echo 'Build images'
        sh 'docker build -t study-jenkins:0.0.1 .'
      }
    }

    stage('Push Images') {
      steps {
        echo 'Push image'
        sh 'docker push study-jenkins:0.0.1'
        sh 'docker rmi study-jenkins:0.0.1'
      }
    }

  }
  environment {
    DOCKERHUB_USERNAME = 'jenwitkmonz@gmail.com'
    DOCKERHUB_PASSWORD = '9ZnHUhfo0HFUx3NW'
  }
}