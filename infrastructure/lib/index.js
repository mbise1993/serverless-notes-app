import DynamoDbStack from './DynamoDbStack';
import S3Stack from './S3Stack';
import CognitoStack from './CognitoStack';

export default function main(app) {
  new DynamoDbStack(app, 'dynamodb');
  
  new S3Stack(app, 's3');

  new CognitoStack(app, 'cognito');
}
