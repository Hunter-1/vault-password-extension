import Model from "../Model/Model";
import callApi from "./API/callApi";
import callFavorites from "./API/callFavorites";

class Controller {
  model: Model;
  constructor(model: Model) {
    this.model = model;
  }
  static async init() {
    return new Controller(new Model(await callFavorites(0)));
  }

  async callPasswordEntry(id: string) {
    const requestUrl = this.model.getRequestUrl(id);
    if (requestUrl) {
      this.model.updateEntry(id, await callApi(requestUrl));
    }
  }

  async nextPage() {
    await this.changePage(20);
  }

  async previousPage() {
    await this.changePage(-20);
  }

  async changePage(changeAmount: number) {
    const totalCount = this.model.getItemCount();
    const currentPage = this.model.getCurrentPage();
    if (
      currentPage + changeAmount >= totalCount ||
      currentPage + changeAmount < 0
    ) {
      return;
    } else {
      this.model = new Model(await callFavorites(currentPage + changeAmount));
    }
  }
}

export default Controller;
