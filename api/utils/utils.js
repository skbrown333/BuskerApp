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
    email: account.email,
    name: account.name,
    lat: account.lat,
    lng: account.lng,
    address: account.lng,
    account_type: account.account_type
  };
}

let utils = {
  generateToken: generateToken,
  getCleanAccount: getCleanAccount
};

module.exports = utils;
