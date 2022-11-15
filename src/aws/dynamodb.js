
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

const putItem = ( tableName, item, onSuccess, onFailure ) => {
    dynamodb.putItem({
        TableName: tableName,
        Item: item
    }, function (err, data) {
        if (err) {
            onFailure(err);
        } else {
            console.log(data);
            onSuccess(data);
        }
    });
};

exports.putItem = function(tableName, item, onSuccess, onFailure) {
    return putItem(tableName, item, onSuccess, onFailure);
};
