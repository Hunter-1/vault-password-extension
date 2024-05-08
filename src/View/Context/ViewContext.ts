import { createContext } from "react";
import { ViewContextType } from "./ViewContextType";

const ViewContext = createContext<ViewContextType>({
  controller: null,
});

export default ViewContext;
