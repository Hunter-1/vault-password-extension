import Model from "../Model/Model";
import callApi from "./API/callApi";
import callFavorites from "./API/callFavorites";

class Controller {
  model: Model;
  constructor(model: Model) {
    this.model = model;
  }
  static async init() {
    const [status, data] = await callFavorites(0);
    if (status == 200) {
      return new Controller(new Model(data));
    } else {
      return status;
    }
  }

  async callPasswordEntry(id: string) {
    const requestUrl = this.model.getRequestUrl(id);
    if (requestUrl) {
      const [status, data] = await callApi(requestUrl);
      if (status == 200) {
        this.model.updateEntry(id, data);
      }
      return status;
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
      const [status, data] = await callFavorites(currentPage + changeAmount);
      if (status == 200) {
        this.model = new Model(data);
      }
      return status;
    }
  }
}

export default Controller;
