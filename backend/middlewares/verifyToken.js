const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // console.log(req.headers)
  const { authorization } = req.headers; // checks for the presence of the authorization header in the incoming request and the header is used to send tokens
  if (!authorization) { // if not present
    return res.status(403).send({ message: 'Authorization header not valid' });
  }

  const token = authorization.split(' ')[1]; // extract the token from the header
  if (!token) {
    return res.status(403).send({ message: 'Token does not exists' });
  }

  // if a token extracted the jwt.verify method from the jsonwebtoken library to verify the token's validity and decode
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: 'Token is not valid' });
    }

    console.log("Decoded JWT:", decoded.id);
    // if the token is valid the decoded object caontains the payload of the token(id and etc property)
    req.user_id = decoded.id; // the user's id is assigned to req.user_id(request object)
    next();
  });
};

module.exports = verifyToken;