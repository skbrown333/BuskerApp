class BaseController {
  constructor(options) {
    if (!options || !options.Model) throw new Error("Must Pass Options");
    this.Model = options.Model;

    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
  }

  /**
   * Create an account
   */
  async create(req, res) {
    let body = req.body;
    let model = await this.Model.create(body);
    return res.status(200).json({ model: model });
  }

  /**
   * Get all accounts
   */
  async getAll(req, res) {
    let models = await this.Model.find({});
    return res.status(200).send(models);
  }

  /**
   * Get account by id
   */
  async getById(req, res, next) {
    if (!req.params || !req.params.id) {
      let error = new Error("Id Required");
      error.httpStatusCode = 400;
      return next(err);
    }

    let modelId = req.params.id;
    let model = await this.Model.findById(modelId);
    return res.status(200).send(model);
  }
}

module.exports = BaseController;
