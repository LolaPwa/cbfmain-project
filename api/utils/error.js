
// function to return an error object with a specified status code and message
//takes two parameters http status code and a message. 
//Creates a new error object. the populated error message is returned.

export const errorHandler = (statusCode, message)=>{
    const error =  new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
};