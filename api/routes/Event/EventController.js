const Event = require("../../models/Event/Event");

class EventController {
  create(req, res) {
    let body = req.body;
    Event.create(body, (err, body) => {
      if (err) res.status(500).send(err);
      return res.status(200).json(body);
    });
  }
  getAll(req, res) {
    Event.find({}, (err, events) => {
      if (err) res.status(500).send(err);
      return res.status(200).send(events);
    });
  }
  getById(req, res) {
    let eventId = req.params.id;
    Event.findById(eventId, (err, event) => {
      if (err) res.status(500).send(err);
      return res.status(200).send(event);
    });
  }
}

module.exports = new EventController();
