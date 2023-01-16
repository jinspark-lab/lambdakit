#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { LambdakitStack } from '../lib/lambdakit-stack';

const app = new cdk.App();
new LambdakitStack(app, 'LambdakitStack', {
    env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});