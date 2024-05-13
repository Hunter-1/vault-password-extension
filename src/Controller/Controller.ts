import Model from "../Model/Model";
import callApi from "./API/callApi";
import callFavorites from "./API/callFavorites";

class Controller {
  model: Model;
  ok: boolean = true;
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
      this.setOk(status);
      return status;
    }
  }

  async setOk(status: number) {
    if (status == -1) {
      this.ok = false;
    } else {
      this.ok = true;
    }
    console.log(this.ok);
  }

  getOk() {
    return this.ok;
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
      this.setOk(status);
      return status;
    }
  }
}

export default Controller;
