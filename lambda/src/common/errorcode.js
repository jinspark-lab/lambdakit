const map = {
    // Common Error Code from DynamoDB
    // https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/CommonErrors.html
    "InvalidParameterType": 400,
    "ConditionalCheckFailedException": 400,
    "ItemCollectionSizeLimitExceededException": 400,
    "ProvisionedThroughputExceededException": 400,
    "RequestLimitExceeded": 400,
    "ResourceNotFoundException": 400,
    "TransactionConflictException": 400,
    "InternalServerError": 500,
    "ServiceUnavailable": 503,
    //

    // Custom Error Code
    "EmptyRequest": 400
    //
};

exports.getErrorCode = function(errorMessage) {
    return map[errorMessage];
};