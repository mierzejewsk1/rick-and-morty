import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/index.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
