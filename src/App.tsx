import { useState, useEffect } from "react";
import callFavorites from "./Controller/API/callFavorites";
import Controller from "./Controller/Controller";

function App() {
  const [controller, setController] = useState<Controller | null>(null);
  useEffect(() => {
    const newController = async () => {
      setController(await Controller.init());
    };
    newController();
  }, []);
  return (
    <div className="App">
      <div>Test</div>
      <div>{controller?.model.getItemCount()}</div>
    </div>
  );
}

export default App;
