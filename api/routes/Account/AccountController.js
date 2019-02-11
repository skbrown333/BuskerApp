const BaseController = require("../../base/BaseController");
const Account = require("../../models/Account/Account");
const utils = require("../../utils/utils");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const JWT_SECRET = process.env.JWT_SECRET;

class AccountController extends BaseController {
  constructor() {
    let Model = Account;

    super({ Model: Model });
  }
  /**
   * Create an account
   */
  async create(req, res, next) {
    let body = req.body;
    if (!body.password) {
      let error = new Error("Password is required");
      error.httpStatusCode = 400;
      return next(error);
    }

    body.hash = bcrypt.hashSync(body.password.trim(), 10);
    let account = await Account.create(body);
    res.status(200).json({
      account: utils.getCleanAccount(account),
      token: utils.generateToken(account)
    });
  }

  /**
   * Authorize credentials
   */
  async authorize(req, res, next) {
    let body = req.body;
    if (!body.email) {
      let error = new Error("Email is required");
      error.httpStatusCode = 400;
      return next(error);
    }

    let options = { email: body.email };
    let account = await Account.findOne(options);

    bcrypt.compare(body.password, account.hash, function(err, valid) {
      if (!valid) {
        let error = new Error("Username or Password is Wrong");
        error.httpStatusCode = 400;
        return next(error);
      }
      res.json({
        account: utils.getCleanAccount(account),
        token: utils.generateToken(account)
      });
    });
  }

  /**
   * Return account from token
   */
  async getFromToken(req, res, next) {
    // check header or url parameters or post parameters for token
    let token = req.body.token;
    if (!token) {
      let error = new Error("Token is required");
      error.httpStatusCode = 400;
      return next(error);
    }

    let account = await jwt.verify(token, JWT_SECRET);
    account = await Account.findById(account._id);
    res.json({
      account: utils.getCleanAccount(account),
      token: utils.generateToken(account)
    });
  }

  /**
   * Get all accounts
   */
  async getAll(req, res) {
    let cleanFields = {
      name: 1,
      lat: 1,
      lng: 1,
      address: 1,
      is_active: 1
    };

    let accounts = await Account.find({}, cleanFields);
    return res.status(200).send(accounts);
  }

  /**
   * Get account by id
   */
  async getById(req, res) {
    let accountId = req.params.id;
    let cleanFields = {
      name: 1,
      lat: 1,
      lng: 1,
      address: 1,
      is_active: 1
    };

    let account = await Account.findById(accountId, cleanFields);
    return res.status(200).send(account);
  }
}

module.exports = AccountController;
