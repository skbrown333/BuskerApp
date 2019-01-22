const axios = require("axios");
const Constants = require("../../Constants/constants");

class AccountService {
  getAll() {
    return new Promise((resolve, reject) => {
      axios.get(Constants.routes.account.getAll).then(res => {
        resolve(res.data);
      });
    });
  }
  getById(accountID) {
    console.log(Constants.routes.account.getAll + "/" + accountID);
    return new Promise((resolve, reject) => {
      axios.get(Constants.routes.account.getAll + "/" + accountID).then(res => {
        console.log(res);
        resolve(res.data);
      });
    });
  }
}

export default new AccountService();
