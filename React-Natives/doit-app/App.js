import React from "react";

import { RootNav } from "./navigation";
import { Provider } from "react-redux";
import store from "./redux";

export default function App() {
  return (
    <Provider store={store}>
      <RootNav />
    </Provider>
  );
}
