import { useState, useEffect } from "react";
import Controller from "./Controller/Controller";

function App() {
  const [controller, setController] = useState<Controller | null>(null);
  useEffect(() => {
    const newController = async () => {
      const newController = await Controller.init();
      setController(newController);
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
