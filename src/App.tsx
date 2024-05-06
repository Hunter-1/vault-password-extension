import React, { useState, useEffect } from "react";
import callFavorites from "./Controller/API/callFavorites";
import Controller from "./Controller/Controller";

function App() {
  const controller = new Controller();
  const [favorites, setfavorites] = useState<string | null>(null);
  useEffect(() => {
    callFavorites().then((data: string) => setfavorites(data));
  }, []);
  return (
    <div className="App">
      <div>{controller.model.getItemCount()}</div>
      <div>{favorites}</div>
    </div>
  );
}

export default App;
