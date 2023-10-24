const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // console.log(req.headers)
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(403).send({ message: 'Authorization header not valid' });
  }

  const token = authorization.split(' ')[1];
  if (!token) {
    return res.status(403).send({ message: 'Token does not exists' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: 'Token is not valid' });
    }

    req.user_id = decoded.id;
    next();
  });
};

module.exports = verifyToken;