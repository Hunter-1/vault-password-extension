import { useState, useContext } from "react";
import { passwordEntry } from "../../Model/Data/passwordEntry";
import ViewContext from "../Context/ViewContext";

interface viewProps {
  entry: passwordEntry;
}

const Entry: React.FC<viewProps> = ({ entry }) => {
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
  return (
    <div className="entry">
      <h2 className="entryTitle">{entry.title}</h2>
      <h3 className="entryUrl">{entry.url}</h3>
      <button onClick={toggleDisplay}>Display Credentials</button>
      {display && (
        <div>
          <p>{entry.username}</p>
          <button
            onClick={() => {
              copyToClipboard(entry.username);
            }}
          >
            Copy Username
          </button>
          <p>{entry.password}</p>
          <button
            onClick={() => {
              copyToClipboard(entry.password);
            }}
          >
            Copy Password
          </button>
          <p>{entry.comment}</p>
        </div>
      )}
      <div></div>
    </div>
  );
};

export default Entry;
