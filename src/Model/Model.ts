import { passwordEntries } from "./Data/passwordEntries";
import { passwordEntry } from "./Data/passwordEntry";

class Model {
  #passwordEntries: passwordEntries = new passwordEntries();
  constructor(data: any) {
    console.log(data);
    this.#passwordEntries = new passwordEntries();
    this.#passwordEntries.itemsCount = data.ItemsCount;
    this.#passwordEntries.currentPage = data.CurrentPage;
    console.log(this.#passwordEntries);
    data.FoundItems.forEach((item: any) => {
      let entry: passwordEntry = new passwordEntry();
      entry.id = item.Id;
      entry.title = item.Title;
      entry.url = item.Url;
      entry.readPermissions = item.ReadPermissions;
      entry.requestUrl = item.RequestUrl;
      this.#passwordEntries.entries.push(entry);
    });
  }
  updateEntry(id: string, data: any) {
    const entry = this.getEntry(id);
    if (entry) {
      entry.comment = data.Comment;
      entry.username = data.Username;
      entry.password = data.Password;
      entry.credentials = true;
    }
  }

  getItemCount() {
    return this.#passwordEntries.itemsCount;
  }

  getCurrentPage() {
    return this.#passwordEntries.currentPage;
  }

  getEntriesByName() {
    const entriesByName = this.#passwordEntries.entries;
    entriesByName.sort((a, b) => a.title.localeCompare(b.title));
    return entriesByName;
  }

  compareURLs(a: passwordEntry, b: passwordEntry) {
    if (a.url == "") {
      return 1;
    } else if (b.url == "") {
      return -1;
    } else {
      return a.url.localeCompare(b.url);
    }
  }

  getEntriesByURL() {
    const entriesByUrl = this.#passwordEntries.entries;
    entriesByUrl.sort((a, b) => {
      return this.compareURLs(a, b);
    });
    return entriesByUrl;
  }

  getEntry(id: string) {
    return this.#passwordEntries.entries.find((entry) => entry.id == id);
  }

  getRequestUrl(id: string) {
    const result = this.getEntry(id);
    return result?.requestUrl;
  }
}

export default Model;
