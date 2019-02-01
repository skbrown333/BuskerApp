import axios from "axios";

export class BaseService {
    route: string;

    constructor(route: string) {
        this.route = route;
    }

    async getAll() {
      let res = await axios.get(this.route);
      return res.data;
    }

    async getById(accountID: string) {
      let res = await axios.get(this.route);
      return res.data[0];
    }
}