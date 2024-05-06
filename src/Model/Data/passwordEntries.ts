import { passwordEntry } from "./passwordEntry";

export class passwordEntries {
  itemsCount?: number;
  currentPage?: number;
  urlPreviousPage?: string;
  urlNextPage?: string;
  entries: Array<passwordEntry> = new Array();
}
