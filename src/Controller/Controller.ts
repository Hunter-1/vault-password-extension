import Model from "../Model/Model";
import callFavorites from "./API/callFavorites";

class Controller {
  model: Model;
  constructor(model: Model) {
    this.model = model;
  }
  static async init() {
    return new Controller(new Model(await callFavorites()));
  }
}

export default Controller;
