enum EErrorMsg {
  UNKNOWN_ERR = 'Unknown server side error occurs',
  NO_METHOD = 'HTTP method not received',
  NO_SUCH_PATH = `Provided path doesn't exist`,
  NOT_SUPPORTED_METHOD_FOR_PATH = 'Provided http method is not supported for given path',
  MISSING_DATA_FOR_USER_CREATING = 'Request body lacks data for a user creating or fields values have invalid type',
  INVALID_ID = 'Invalid user id',
  USER_NOT_EXISTS = 'User with provided id does not exist',
  INVALID_JSON_BODY = 'Invalid JSON body',
}

export default EErrorMsg;
