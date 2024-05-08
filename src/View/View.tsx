import { useState } from "react";
import Controller from "../Controller/Controller";
import Model from "../Model/Model";
import Entry from "./Components/Entry";

interface viewProps {
  controller: Controller;
}

const View: React.FC<viewProps> = ({ controller }) => {
  const [model, setModel] = useState<Model>(controller.model);
  const [sortByUrl, setSortByUrl] = useState<boolean>(false);
  var entries = controller.model.getEntriesByName();
  if (sortByUrl) {
    entries = controller.model.getEntriesByURL();
  }
  function toggleNextPage() {
    controller.nextPage().then(() => setModel(controller.model));
  }
  function togglePreviousPage() {
    controller.previousPage().then(() => setModel(controller.model));
  }
  function toggleSortByUrl() {
    const oldSortByUrl = sortByUrl;
    setSortByUrl(!oldSortByUrl);
  }
  return (
    <div className="View">
      <h1 className="Title">Vault Password Extension</h1>
      <div className="Menu">
        <div className="PageButtons">
          <button onClick={() => togglePreviousPage()}>Previous</button>
          <button onClick={() => toggleNextPage()}>Next</button>
        </div>
        <div className="Sort">
          <span className="SortText">Sort By:</span>
          <button onClick={() => toggleSortByUrl()}>
            {sortByUrl ? "Name" : "Url"}
          </button>
        </div>
      </div>
      <div>
        {entries.map(function (entry) {
          return <Entry entry={entry} sortByUrl={sortByUrl} />;
        })}
      </div>
      <div></div>
    </div>
  );
};

export default View;
