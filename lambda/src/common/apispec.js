
const corsResponseHeader = {
    "Access-Control-Allow-Headers" : "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
};

exports.getCorsDefaultHeader = function() {
    return corsResponseHeader;
};