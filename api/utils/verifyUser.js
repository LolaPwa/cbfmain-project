// errorhandler used to create custom error objects

import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';


export const verifyToken = (req, res, next) => {// request, response and next middleware in chain
    const token = req.cookies.access_token;// retrieve jwt from access-token cookie in the request
    if(!token) return next(errorHandler(401, 'unauthorized'));

 jwt.verify(token, process.env.JWT_SECRET, (err, user)=> {// verify the users token authenticity, , parameters is the token, secret key and a call back function once verification is complete
    if(err) return next(errorHandler(403, 'Forbidden'));//verification callback
    req.user = user;
    next();
 });
  
};
