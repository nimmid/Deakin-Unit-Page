pipeline {
    agent any

    environment {
        DIRECTORY_PATH = "C:\\nimmi personal\\Deakin\\Study Material\\SIT 753\\Week 4\\Deakin-Unit-Page"
        TESTING_ENVIRONMENT = "nextjs-app-testing-environment"
        PRODUCTION_ENVIRONMENT = "nimmi_nextjs-app-production-environment"
        JENKINS_LOG_PATH="C:\\ProgramData\\Jenkins\\.jenkins\\jobs\\Github-Jenkins-pipeline\\builds\\21\\log"
    }
    
    stages {
        stage('Build') {
            steps {
                // Build the code using Maven or another build automation tool
                echo "Build Stage"
            }
        }
        stage('Unit and Integration Tests') {
            steps {
                // Run unit tests using JUnit or another test automation tool
                // Run integration tests using Selenium or another integration testing tool
                echo "Testing Stage"
            }
        }
        stage('Code Analysis') {
            steps {
                // Integrate a code analysis tool like SonarQube or Checkstyle
                echo "Code Analysis Stage"
            }
        }
        stage('Security Scan') {
            steps {
                // Perform a security scan using tools like OWASP ZAP or SonarQube
                echo "Security Stage"
            }
        }
        stage('Deploy to Staging') {
            steps {
                // Deploy the application to a staging server, e.g., AWS EC2 instance
                echo "Deployment Stage"
            }
        }
        stage('Integration Tests on Staging') {
            steps {
                // Run integration tests on the staging environment
                echo "Integration Stage"
            }
        }
        stage('Deploy to Production') {
            steps {
                // Deploy the application to a production server, e.g., AWS EC2 instance
                echo "Production Stage"
            }
        }
    }


    post{
        always{
            echo 'Pipeline Completed.'
        }

        success{
            emailext body:'Pipeline succeeded. All stages complted.',
                     subject: 'Pipeline status: Successful',
                     to:'nimmid6@gmail.com',
                     attachmentsPattern: '/*.log'
        }

        failure{
            emailext body:'Pipeline failed. Check logs for detail',
                     subject: 'Pipeline status: Failure',
                     to:'nimmid6.com',
                     attachmentsPattern: '/*.log'
        }
    }
}