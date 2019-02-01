/* Routes */
class Routes {
    base_route: string;
    event: string;
    account: string;

    constructor() {
        this.base_route = "https://192.168.1.2:3007";
        this.event = `${this.base_route}/events`;
        this.account = `${this.base_route}/accounts`;
    }
}

export const ROUTES =  new Routes();
