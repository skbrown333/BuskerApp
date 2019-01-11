const Account = require("../../models/Account/Account");

class AccountController {
  create(req, res) {
    let body = req.body;
    Account.create(body, (err, body) => {
      if (err) res.status(500).send(err);
      return res.status(200).json(body);
    });
  }
  getAll(req, res) {
    Account.find({}, (err, accounts) => {
      if (err) res.status(500).send(err);
      return res.status(200).send(accounts);
    });
  }
  getById(req, res) {
    let accountId = req.params.id;
    Account.findById(accountId, (err, account) => {
      if (err) res.status(500).send(err);
      return res.status(200).send(account);
    });
  }
}

module.exports = new AccountController();
