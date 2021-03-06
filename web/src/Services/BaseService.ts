import axios from "./axios.instance";

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
    let res = await axios.get(this.route + "/" + accountID);
    return res.data;
  }

  async create(options: Object) {
    let res = await axios.post(this.route + "/create", options);
    return res.data.model;
  }
}
