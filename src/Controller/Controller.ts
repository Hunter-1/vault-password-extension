import Model from "../Model/Model";
import callFavorites from "./API/callFavorites";

class Controller {
  model?: Model;
  constructor() {
    this.init();
  }
  async init() {
    this.model = new Model(callFavorites());
  }
}

export default Controller;
