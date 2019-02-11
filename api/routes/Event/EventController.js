const BaseController = require("../../base/BaseController");
const Event = require("../../models/Event/Event");

class EventController extends BaseController {
  constructor() {
    let Model = Event;
    let options = { Model: Model };

    super(options);
  }
}

module.exports = EventController;
