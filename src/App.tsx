import { useState, useEffect } from "react";
import Controller from "./Controller/Controller";
import View from "./View/View";
import "./View/style.css";
import ViewProvider from "./View/Context/ViewProvider";

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
          <ViewProvider controller={controller}>
            <View controller={controller} />
          </ViewProvider>
        ) : (
          "Api Call Failed: Error Code " + status
        )}
      </div>
    </div>
  );
}

export default App;
