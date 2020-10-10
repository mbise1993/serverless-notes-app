import * as cdk from '@aws-cdk/core';
import * as dynamoDb from '@aws-cdk/aws-dynamodb';
import * as sst from '@serverless-stack/resources';

export default class DynamoDbStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const app = this.node.root;

    const table = new dynamoDb.Table(this, 'Table', {
      billingMode: dynamoDb.BillingMode.PAY_PER_REQUEST,
      sortKey: { name: 'noteId', type: dynamoDb.AttributeType.STRING },
      partitionKey: { name: 'userId', type: dynamoDb.AttributeType.STRING },
    });

    new cdk.CfnOutput(this, 'TableName', {
      value: table.tableName,
      exportName: app.logicalPrefixedName('TableName'),
    });

    new cdk.CfnOutput(this, 'TableArn', {
      value: table.tableArn,
      exportName: app.logicalPrefixedName('TableArn'),
    });
  }
}
