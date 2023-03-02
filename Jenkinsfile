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

    stage('Git commit and Push') {
      steps {
        sh 'git remote set-url origin https://kritjenwit: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@github.com/programmer-themall/study-jenkins.git'
        sh 'git tag v0.0.1-test-jenkins'
        sh 'git push origin v0.0.1-test-jenkins'
      }
    }

    stage('Test Deployment') {
      steps {
        sh 'docker stop kritmn00817/study-jenkins:0.0.1 || true'
        sh 'docker rm kritmn00817/study-jenkins:0.0.1 || true'
        sh 'docker run -d kritmn00817/study-jenkins:0.0.1'
        sleep 15
        sh 'docker inspect --format \'{{ .State.Status }}\' kritmn00817/study-jenkins:0.0.1'
        sh 'docker stop kritmn00817/study-jenkins:0.0.1 || true'
        sh 'docker rm kritmn00817/study-jenkins:0.0.1 || true'
      }
    }

  }
  environment {
    DOCKERHUB_USERNAME = 'kritmn00817'
    DOCKERHUB_PASSWORD = '9ZnHUhfo0HFUx3NW'
  }
}