import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';

export class LambdakitStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const func = new lambda.DockerImageFunction(this, id + "_function", {
        functionName: 'MyLambdaKit',
        code: lambda.DockerImageCode.fromImageAsset(path.join(__dirname, '../lambda'))
    });
  }
}
