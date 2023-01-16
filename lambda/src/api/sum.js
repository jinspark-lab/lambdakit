
const AWS = require('aws-sdk');
const errorCode = require('../common/errorcode');
const apiSpec = require('../common/apispec');
const dynamodb = require('../aws/dynamodb');

/**
 * Request Body
 *  - firstValue  :number
 *  - secondValue :number
 *  - timestamp   :timestamp
 * 
 * Response
 *  - statusCode  :number
 *  - uniqueId    :string
 *  - result      :number
 */
exports.handler = async function (event, context) {
    if (!event.body) {
        // Handling Empty body
        return new Promise(function (resolve, reject) {
            resolve({
                statusCode: errorCode.getErrorCode("EmptyRequest"),
                headers: apiSpec.getCommonHeader(),
                body: "EmptyRequestBody"
            });
        });
    } else {
        return new Promise(function (resolve, reject) {
            try {
                // Parse Request body
                const param = JSON.parse(event.body);
                const firstValue = parseInt(param.first);
                const secondValue = parseInt(param.second);
                const timestamp = param.timestamp;

                // Base 64 Encode with Function UUID + Request Timestamp
                const uniqueId = Buffer.from(JSON.stringify({
                    requestId: event.requestContext.requestId,
                    requestTimestamp: timestamp
                })).toString('base64');

                const responseBody = {
                    statusCode: 200,
                    uniqueId: uniqueId,
                    result: firstValue + secondValue
                };

                const successHandler = (data) => {
                    resolve({
                        statusCode: 200,
                        headers: apiSpec.getCommonHeader(),
                        body: JSON.stringify(data)
                    });
                };

                const errorHandler = (err) => {
                    console.log(JSON.stringify(err));
                    // reject means => Lambda Invocation Error
                    // Use Resolve to handle errors in Lambda function
                    resolve({
                        statusCode: errorCode.getErrorCode(err.code),
                        headers: apiSpec.getCommonHeader(),
                        body: JSON.stringify(err)
                    })
                };

                dynamodb.putItem('tableName', {
                    'UUID': { S: uniqueId },
                    'firstValue': { N: '' + firstValue },
                    'secondValue': { N: '' + secondValue },
                    'timestamp': { S: '' + timestamp }
                    // 'timestamp': {S: timestamp}      //Throwing DynamoDB PutItem Error
                }, successHandler, errorHandler);

            } catch (err) {
                // errorHandler(err);
                reject(err);
            }
        });
    }
}
