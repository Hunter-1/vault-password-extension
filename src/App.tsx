import { useState, useEffect } from "react";
import Controller from "./Controller/Controller";
import View from "./View/View";
import "./View/style.css";

function App() {
  const [controller, setController] = useState<Controller | null>(null);
  const [status, setStatus] = useState<number>(200);
  useEffect(() => {
    const newController = async () => {
      const newController = await Controller.init();
      if (typeof newController) {
        setController(newController);
      } else {
        setStatus(newController);
      }
    };
    newController();
  }, []);
  return (
    <div className="App">
      <div>
        {controller ? (
          <View controller={controller} />
        ) : (
          "Api Call Failed: Error Code " + status
        )}
      </div>
    </div>
  );
}

export default App;
