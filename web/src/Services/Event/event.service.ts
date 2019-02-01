import { BaseService } from '../BaseService';
import { ROUTES } from "../../Constants/constants";

class EventService extends BaseService{
  constructor() {
    let route: string = ROUTES.event;
    super(route);
   }
}

export default new EventService();
