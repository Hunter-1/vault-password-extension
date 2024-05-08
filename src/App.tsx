import { useState, useEffect } from "react";
import Controller from "./Controller/Controller";
import View from "./View/View";
import "./View/style.css";
import ViewProvider from "./View/Context/ViewProvider";

function App() {
  const [controller, setController] = useState<Controller | null>(null);
  const [status, setStatus] = useState<string>("Loading...");

  useEffect(() => {
    const newController = async () => {
      const newController = await Controller.init();
      if (typeof newController != "number") {
        setController(newController);
      } else {
        setStatus("The Api Call has failed, please try again.");
      }
    };
    newController();
  }, []);
  return (
    <div className="App">
      <div>
        {controller ? (
          <ViewProvider controller={controller}>
            <View controller={controller} />
          </ViewProvider>
        ) : (
          status
        )}
      </div>
    </div>
  );
}

export default App;
