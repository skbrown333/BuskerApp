const axios = require("axios");
const Constants = require("../../Constants/constants");

class AccountService {
  getAll() {
    return new Promise((resolve, reject) => {
      axios.get(Constants.routes.account).then(res => {
        resolve(res.data);
      });
    });
  }
  getById(accountID) {
    return new Promise((resolve, reject) => {
      axios.get(Constants.routes.account + "/" + accountID).then(res => {
        resolve(res.data);
      });
    });
  }
}

export default new AccountService();
