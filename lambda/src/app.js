
const AWS = require('aws-sdk');

/**
 * Entry point of Lambda function
 * @param {*} event 
 * @param {*} context 
 * @returns 
 */
exports.handler = async function (event, context) {
    // Handling Empty body
    return new Promise(function (resolve, reject) {
        console.log(event);
        const headers = {
            "Access-Control-Allow-Headers" : "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"            
        };
        resolve({
            statusCode: 200,
            headers,
            body: "Hello Lambda"
        });
    });
}
