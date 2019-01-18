const axios = require("axios");
const Constants = require("../../Constants/constants");

class EventService {
  constructor() {}
  getAll() {
    return new Promise((resolve, reject) => {
      axios.get(Constants.routes.event.getAll).then(res => {
        resolve(res.data);
      });
    });
  }
}

export default new EventService();
