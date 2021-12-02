import { Provider as ReduxProvider } from "react-redux";
import React, { FC } from "react";
import store from "./store";

interface Children {}
const Provider: FC<Children> = ({ children }) => (
  <ReduxProvider store={store}>{children}</ReduxProvider>
);

export default Provider;
