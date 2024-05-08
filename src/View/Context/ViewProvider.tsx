import { Children, ReactNode } from "react";
import Controller from "../../Controller/Controller";
import ViewContext from "./ViewContext";

const ViewProvider: React.FC<{
  children: ReactNode;
  controller: Controller;
}> = ({ children, controller }) => {
  return (
    <ViewContext.Provider
      value={{
        controller,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};

export default ViewProvider;
