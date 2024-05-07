import { passwordEntries } from "./Data/passwordEntries";
import { passwordEntry } from "./Data/passwordEntry";

class Model {
  passwordEntries: passwordEntries = new passwordEntries();
  constructor(data: any) {
    console.log(data);
    this.passwordEntries = new passwordEntries();
    this.passwordEntries.itemsCount = data.ItemsCount;
    this.passwordEntries.currentPage = data.CurrentPage;
    this.passwordEntries.urlNextPage = data.UrlNextPage;
    console.log(this.passwordEntries);
    data.FoundItems.forEach((item: any) => {
      let entry: passwordEntry = new passwordEntry();
      entry.id = item.Id;
      entry.title = item.Title;
      entry.url = item.Url;
      entry.readPermissions = item.ReadPermissions;
      entry.requestUrl = item.RequestUrl;
      this.passwordEntries.entries.push(entry);
    });
  }

  getItemCount() {
    return this.passwordEntries.itemsCount;
  }
}

export default Model;
