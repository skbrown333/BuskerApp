import { BaseService } from "../BaseService";
import { ROUTES } from "../../Constants/constants";
import axios from "axios";

class AccountService extends BaseService {
  constructor() {
    let route: string = ROUTES.account;
    super(route);
  }

  async authenticate(options: any) {
    let res = await axios.post(this.route + "/login", options);
    return res.data;
  }

  async authenticateByToken(token: any) {
    let res = await axios.post(this.route + "/token", { token: token });
    return res.data;
  }

  getPhoto(accountId: string) {
    return this.route + "/" + accountId  + "/photo";
  }
}

export default new AccountService();
