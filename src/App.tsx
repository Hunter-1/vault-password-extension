import { useState, useEffect } from "react";
import Controller from "./Controller/Controller";
import View from "./View/View";
import "./View/style.css";
import ViewProvider from "./View/Context/ViewProvider";

function App() {
  const [controller, setController] = useState<Controller | null>(null);
  const [status, setStatus] = useState<string>(
    "Loading... | The First time loading this extension will require a few seconds of warmup, so give it a little time"
  );

  useEffect(() => {
    const newController = async () => {
      const newController = await Controller.init();
      if (typeof newController != "number") {
        setController(newController);
      } else if (newController == -1) {
        setStatus(
          "The Extension failed to connect due to a bad Internet connection, are you connected to the internet?"
        );
      } else if (newController == 401) {
        setStatus(
          "The Extension failed to connect due to bad Credentials, did you type your Login correctly?"
        );
      } else {
        setStatus(
          "The Extension failed to connect, please try again. | Error Code: " +
            newController
        );
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
          <div className="error">{status}</div>
        )}
      </div>
    </div>
  );
}

export default App;
