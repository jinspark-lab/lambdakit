import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as Lambdakit from '../lib/lambdakit-stack';

// example test. To run these tests, uncomment this file along with the
// example resource in lib/lambdakit-stack.ts
test('Lambda function Created', () => {
    const app = new cdk.App();
    const stack = new Lambdakit.LambdakitStack(app, 'TestKit');
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Lambda::Function', {
        FunctionName: 'MyLambdaKit'
    });
});
