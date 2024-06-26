import { useState, useContext, useEffect } from "react";
import { passwordEntry } from "../../Model/Data/passwordEntry";
import ViewContext from "../Context/ViewContext";

interface viewProps {
  entry: passwordEntry;
  sortByUrl: boolean;
}

const Entry: React.FC<viewProps> = ({ entry, sortByUrl }) => {
  const controller = useContext(ViewContext).controller;
  const [display, setDisplay] = useState<boolean>(false);
  async function toggleDisplay() {
    if (!entry.credentials) {
      {
        if (controller) {
          await controller.callPasswordEntry(entry.id);
        }
      }
    }
    const oldDisplay = display;
    setDisplay(!oldDisplay);
  }
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }
  useEffect(() => {
    setDisplay(false);
  }, [sortByUrl, controller?.model]);
  return (
    <div className="entry">
      <div className="entryListing">
        <div className="entryInfo">
          <h2 className="entryTitle">{entry.title}</h2>
          <h3 className="entryUrl">{entry.url}</h3>
        </div>
        {entry.readPermissions ? (
          <button className="entryCredentialsButton" onClick={toggleDisplay}>
            Display Credentials
          </button>
        ) : (
          <button disabled={true} className="entryCredentialsButton">
            Permission Denied
          </button>
        )}
      </div>
      {display && (
        <div>
          <div className="entryProperty">
            <div className="entryDisplay">
              <div className="entryText">{entry.username}</div>
              <div>Username</div>
            </div>
            <button
              className="displayButton"
              onClick={() => {
                copyToClipboard(entry.username);
              }}
            >
              Copy Username
            </button>
          </div>
          <div className="entryProperty">
            <div className="entryDisplay">
              <div className="entryText">{entry.password}</div>
              <div>Password</div>
            </div>
            <button
              className="displayButton"
              onClick={() => {
                copyToClipboard(entry.password);
              }}
            >
              Copy Password
            </button>
          </div>
          <p>{entry.comment}</p>
        </div>
      )}
    </div>
  );
};

export default Entry;
