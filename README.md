# Lambdakit
Lambda development kits for everyone

This project provides Integrated Serverless environment using AWS CDK.

## How to use CDK?

The `cdk.json` file tells the CDK Toolkit how to execute your app.

### Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## Project Structure

This project contains CDK Project for Lambda infrastructure and Nodejs Backend source codes.

Nodejs backend source code is simple Express server call Lambda function.

## How to use this Project?

You can develop your Nodejs backend inside of lambda directory.

### Prerequisite

- CDK v2 : https://docs.aws.amazon.com/cdk/v2/guide/cli.html 
- NodeJS : https://nodejs.org/en/download/ 
- Docker Daemon to build Dockerfile : https://docs.docker.com/engine/install/ 

### To develop Nodejs backend

- To import Node Packages for your Nodejs backend:
`npm install <packageName>`

- Run command below under the lambda directory:
`node index.js`

### To deploy Source code to Lambda function

After developing Nodejs backend source codes, you can deploy your source code using CDK project.

To deploy your source code, run instructions below:

- From the root path of this project:
`cdk deploy`

# Description

Enjoy the reference and contact me if you have any questions!
