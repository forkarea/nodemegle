let Router = require('express').Router;

module.exports = class IndexRouter extends Router {
  constructor(controller) {
      super();

      this.get('/', controller.renderIndex.bind(controller));
      this.get('/json', controller.printJson.bind(controller));
  }
};