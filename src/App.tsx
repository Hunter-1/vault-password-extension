import { useState, useEffect } from "react";
import Controller from "./Controller/Controller";
import View from "./View/View";
import "./View/style.css";
import ViewProvider from "./View/Context/ViewProvider";

function App() {
  const [controller, setController] = useState<Controller | null>(null);
  const [status, setStatus] = useState<string>(
    "Loading... | The First time using this extension will require a few seconds of warmup, so wait a little time"
  );

  useEffect(() => {
    const newController = async () => {
      const newController = await Controller.init();
      if (typeof newController != "number") {
        setController(newController);
      } else if (newController == -1) {
        setStatus(
          "The Api Call has failed due to a bad connection, are you connected to the internet?"
        );
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
