const Account = require("../../models/Account/Account");
const utils = require("../../utils/utils");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class AccountController {
  /**
   * Create an account
   */
  create(req, res) {
    let body = req.body;
    body.hash = bcrypt.hashSync(body.password.trim(), 10);
    Account.create(body, (err, account) => {
      if (err) res.status(500).send(err);
      res.status(200).json({
        account: utils.getCleanAccount(account),
        token: utils.generateToken(account)
      });
    });
  }

  /**
   * Authorize credentials
   */
  authorize(req, res) {
    let body = req.body;

    Account.findOne({ email: body.email }, (err, account) => {
      if (err) throw err;
      if (!account) {
        return res.status(404).json({
          error: true,
          message: "Username or Password is Wrong"
        });
      }

      bcrypt.compare(body.password, account.hash, function(err, valid) {
        if (!valid) {
          return res.status(404).json({
            error: true,
            message: "Username or Password is Wrong"
          });
        }
        res.json({
          account: utils.getCleanAccount(account),
          token: utils.generateToken(account)
        });
      });
    });
  }

  /**
   * Return account from token
   */
  getFromToken(req, res) {
    // check header or url parameters or post parameters for token
    let token = req.body.token || req.query.token;
    if (!token) {
      return res.status(401).json({ message: "Must pass token" });
    }
    // Check token that was passed by decoding token using secret
    jwt.verify(token, process.env.JWT_SECRET, function(err, account) {
      if (err) throw err;
      //return user using the id from w/in JWTToken
      Account.findById(
        {
          _id: account._id
        },
        (err, account) => {
          if (err) throw err;
          account = utils.getCleanAccount(account);
          res.json({
            account: utils.getCleanAccount(account),
            token: token
          });
        }
      );
    });
  }

  /**
   * Get all accounts
   */
  getAll(req, res) {
    Account.find({}, (err, accounts) => {
      if (err) res.status(500).send(err);
      return res.status(200).send(accounts);
    });
  }

  /**
   * Get account by id
   */
  getById(req, res) {
    let accountId = req.params.id;
    Account.findById(accountId, (err, account) => {
      if (err) res.status(500).send(err);
      return res.status(200).send(account);
    });
  }
}

module.exports = new AccountController();
