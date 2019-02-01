import { BaseService } from "../BaseService";
import { ROUTES } from "../../Constants/constants";

class AccountService extends BaseService {   
  constructor() {
    let route: string = ROUTES.account;
    super(route);
  }
}

export default new AccountService();
