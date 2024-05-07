import { useState, useEffect } from "react";
import Controller from "../Controller/Controller";
import Model from "../Model/Model";
import Entry from "./Components/Entry";

interface viewProps {
  controller: Controller;
}

const View: React.FC<viewProps> = ({ controller }) => {
  const [model, setModel] = useState<Model>(controller.model);
  const entries = controller.model.getEntries();
  function toggleNextPage() {
    controller.nextPage().then(() => setModel(controller.model));
  }
  function togglePreviousPage() {
    controller.previousPage().then(() => setModel(controller.model));
  }
  return (
    <div className="View">
      <h1>Vault Password Extension</h1>
      <div>
        <button onClick={() => togglePreviousPage()}>Previous</button>
        <button onClick={() => toggleNextPage()}>Next</button>
      </div>
      <div>
        {entries.map(function (entry) {
          return <Entry entry={entry} />;
        })}
      </div>
      <div></div>
    </div>
  );
};

export default View;
