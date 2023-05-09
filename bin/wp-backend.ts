#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { WpBackendStack } from '../lib/wp-backend-stack';

const app = new cdk.App();
new WpBackendStack(app, 'WpBackendStack', {
  stackName: 'WP-webphin',
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
