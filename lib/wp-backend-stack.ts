import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { SPADeploy } from 'cdk-spa-deploy';

export class WpBackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // code start
    new SPADeploy(this, 'wp-webphin').createSiteWithCloudfront({
      indexDoc: 'index.html',
      websiteFolder: '../wp-frontenf/dist/',
    });
    // code end
  }
}
