import React, { useState, useEffect } from "react";
import callFavorites from "./Controller/API/callFavorites";

function App() {
  const [favorites, setfavorites] = useState<string | null>(null);
  useEffect(() => {
    callFavorites().then((data: string) => setfavorites(data));
  }, []);
  return <div className="App">{favorites}</div>;
}

export default App;
