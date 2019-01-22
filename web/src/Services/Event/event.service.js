const axios = require("axios");
const Constants = require("../../Constants/constants");

class EventService {
  getAll() {
    return new Promise((resolve, reject) => {
      axios.get(Constants.routes.event).then(res => {
        resolve(res.data);
      });
    });
  }
  getById(accountID) {
    return new Promise((resolve, reject) => {
      axios.get(Constants.routes.event + "/" + accountID).then(res => {
        resolve(res.data);
      });
    });
  }
}

export default new EventService();
