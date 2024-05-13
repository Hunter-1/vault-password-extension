import { useState, useEffect } from "react";
import Controller from "../Controller/Controller";
import Model from "../Model/Model";
import Entry from "./Components/Entry";

interface viewProps {
  controller: Controller;
}

const View: React.FC<viewProps> = ({ controller }) => {
  const [model, setModel] = useState<Model>(controller.model);
  const [sortByUrl, setSortByUrl] = useState<boolean>(false);
  const [ok, setOk] = useState<boolean>(controller.getOk());
  const [previousDisabled, setPreviousDisabled] = useState<boolean>(true);
  const [nextDisabled, setNextDisabled] = useState<boolean>(false);
  var entries = controller.model.getEntriesByName();
  if (sortByUrl) {
    entries = controller.model.getEntriesByURL();
  }
  function toggleNextPage() {
    controller.nextPage().then(() => {
      setModel(controller.model);
      setPreviousDisabled(!controller.checkIfPreviousTurnable());
      setNextDisabled(!controller.checkIfNextTurnable());
    });
  }
  function togglePreviousPage() {
    controller.previousPage().then(() => {
      setModel(controller.model);
      setPreviousDisabled(!controller.checkIfPreviousTurnable());
      setNextDisabled(!controller.checkIfNextTurnable());
    });
  }
  function toggleSortByUrl() {
    const oldSortByUrl = sortByUrl;
    setSortByUrl(!oldSortByUrl);
  }
  useEffect(() => {
    setOk(controller.getOk());
  }, [controller.ok]);
  return (
    <div className="view">
      <div className="upper">
        <h1 className="title">Vault Password Extension</h1>
        {!ok && (
          <div className="error">
            It looks like something failed, this is mostly likely due to a bad
            internet connection. Please check your Internet connection, reset
            the Extension, and try again.
          </div>
        )}
        <div className="menu">
          <div className="pageButtons">
            <button
              disabled={previousDisabled}
              onClick={() => togglePreviousPage()}
            >
              Previous
            </button>
            <button disabled={nextDisabled} onClick={() => toggleNextPage()}>
              Next
            </button>
          </div>
          <div className="sort">
            <div className="sortInner">
              <div className="sortText">Sort By:</div>
              <button className="sortButton" onClick={() => toggleSortByUrl()}>
                {sortByUrl ? "Name" : "Url"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="entries">
        {entries.map(function (entry) {
          return <Entry entry={entry} sortByUrl={sortByUrl} />;
        })}
      </div>
      <div className="pageButtons bottom">
        <button
          disabled={previousDisabled}
          onClick={() => togglePreviousPage()}
        >
          Previous
        </button>
        <button disabled={nextDisabled} onClick={() => toggleNextPage()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default View;
