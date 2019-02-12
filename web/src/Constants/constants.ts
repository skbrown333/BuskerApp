/* Routes */
class Routes {
  base_route: string;
  event: string;
  account: string;

  constructor() {
    this.base_route = "https://priestly.io:3011";
    this.event = `${this.base_route}/events`;
    this.account = `${this.base_route}/accounts`;
  }
}

class Map {
  default_location: object;
  constructor() {
    this.default_location = {
      lat: 43.079,
      lng: -89.386408
    };
  }
}

export const ROUTES = new Routes();
export const MAP = new Map();
