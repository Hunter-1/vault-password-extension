import { passwordEntry } from "./passwordEntry";

export class passwordEntries {
  itemsCount: number = 0;
  currentPage: number = 0;
  urlPreviousPage: string = "";
  urlNextPage: string = "";
  entries: Array<passwordEntry> = new Array();
}
