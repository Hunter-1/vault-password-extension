import { useState } from "react";
import { passwordEntry } from "../../Model/Data/passwordEntry";

interface viewProps {
  entry: passwordEntry;
}

const Entry: React.FC<viewProps> = ({ entry }) => {
  const [passwordEntry, setEntry] = useState<passwordEntry>(entry);
  const [display, setDisplay] = useState<boolean>(false);
  function toggleDisplay() {
    if (!entry.credentials) {
      {
        //Context would have been good
      }
      const oldDisplay = display;
      setDisplay(!oldDisplay);
    }
  }
  return (
    <div className="entry">
      <h2 className="entryTitle">{entry.title}</h2>
      <h3 className="entryUrl">{entry.url}</h3>
      <div></div>
    </div>
  );
};

export default Entry;
