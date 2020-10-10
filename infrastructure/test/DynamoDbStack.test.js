import { expect, matchTemplate, MatchStyle, haveResource } from "@aws-cdk/assert";
import * as sst from "@serverless-stack/resources";

import DynamoDbStack from "../lib/DynamoDbStack";

test('Test Stack', () => {
  const app = new sst.App();
  // WHEN
  const stack = new DynamoDbStack(app, 'test-stack');
  // THEN
  expect(stack).to(
    haveResource('AWS::DynamoDB::Table', {
      BillingMode: 'PAY_PER_REQUEST',
    })
  );
});
