import DynamoDbStack from './DynamoDbStack';
import S3Stack from './S3Stack';
import CognitoStack from './CognitoStack';

export default function main(app) {
  new DynamoDbStack(app, 'dynamodb');
  
  const s3 = new S3Stack(app, 's3');

  new CognitoStack(app, 'cognito', {
    bucketArn: s3.bucket.bucketArn,
  });
}
