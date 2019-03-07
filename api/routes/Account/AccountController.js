const BaseController = require("../../base/BaseController");
const Account = require("../../models/Account/Account");
const AWS = require("aws-sdk");
const utils = require("../../utils/utils");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const JWT_SECRET = process.env.JWT_SECRET;
const s3 = new AWS.S3();
const multiparty = require("multiparty");
const bluebird = require("bluebird");
const fs = require("fs");
const fileType = require("file-type");

AWS.config.setPromisesDependency(bluebird);
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID_1,

  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_1
});
console.log(
  "process.env.AWS_SECRET_ACCESS_KEY: ",
  process.env.AWS_SECRET_ACCESS_KEY_1
);
console.log("process.env.AWS_ACCESS_KEY_ID: ", process.env.AWS_ACCESS_KEY_ID_1);
const uploadFile = (buffer, name, type) => {
  const params = {
    ACL: "public-read",
    Body: buffer,
    Bucket: "photos.priestly.app",
    Region: "us-east-2",
    ContentType: type.mime,
    Key: `${name}.${type.ext}`
  };
  return s3.upload(params).promise();
};

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
      first_name: 1,
      last_name: 1,
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

  async getPhoto(req, res, next) {
    let accountId = req.params.id;
    let data = await s3.getObject(
      {
        Bucket: "photos.priestly.app",
        Key: accountId + ".png"
      },
      (err, data) => {
        if (err) return next(new Error("Error Getting Photo"));
        try {
          let img = new Buffer(data.Body, "base64");

          res.writeHead(200, {
            "Content-Type": "image/png",
            "Content-Length": img.length
          });
          res.end(img);
        } catch (err) {
          return next(new Error("Error Getting Photo"));
        }
      }
    );
  }

  async uploadPhoto(req, res, next) {
    const form = new multiparty.Form();
    form.parse(req, async (error, fields, files) => {
      if (error) throw new Error(error);
      try {
        const path = files.file[0].path;
        const buffer = fs.readFileSync(path);
        const type = fileType(buffer);
        const timestamp = Date.now().toString();
        const fileName = `${timestamp}-lg`;
        const data = await uploadFile(buffer, fileName, type);
        return res.status(200).send(data);
      } catch (error) {
        console.log("error: ", error);
        return res.status(400).send(error);
      }
    });
  }
}

module.exports = AccountController;
