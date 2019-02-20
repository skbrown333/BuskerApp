const jwt = require("jsonwebtoken");

function generateToken(account) {
  if (!account) return null;
  let u = {
    name: account.name,
    email: account.email,
    _id: account._id.toString()
  };
  return (token = jwt.sign(u, process.env.JWT_SECRET));
}

function getCleanAccount(account) {
  return {
    _id: account._id,
    email: account.email,
    name: account.name,
    lat: account.lat,
    lng: account.lng,
    address: account.address,
    account_type: account.account_type,
    img: account.img
  };
}

function wrapAsync(fn) {
  return function(req, res, next) {
    fn(req, res, next).catch(next);
  };
}

function handleError(error, req, res, next) {
  res.json({ message: error.message, status: error.status });
}

let utils = {
  handleError: handleError,
  generateToken: generateToken,
  getCleanAccount: getCleanAccount,
  wrapAsync: wrapAsync
};

module.exports = utils;
