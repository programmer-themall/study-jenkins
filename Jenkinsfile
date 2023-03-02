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
        sh 'docker build -t kritmn00817/study-jenkins:0.0.1 .'
      }
    }

    stage('Push Images') {
      steps {
        echo 'Push image'
        sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD '
        sh 'docker push kritmn00817/study-jenkins:0.0.1'
        sh 'docker rmi kritmn00817/study-jenkins:0.0.1'
      }
    }

  }
  environment {
    DOCKERHUB_USERNAME = 'kritmn00817'
    DOCKERHUB_PASSWORD = '9ZnHUhfo0HFUx3NW'
  }
}