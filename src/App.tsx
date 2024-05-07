import { useState, useEffect } from "react";
import Controller from "./Controller/Controller";

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
      <div>Test</div>
      <div>
        {controller
          ? controller.model.getItemCount()
          : "Api Call Failed: Error Code " + status}
      </div>
    </div>
  );
}

export default App;
