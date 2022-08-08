import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { ListProvider } from "./Provider/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ListProvider>
        <App />
      </ListProvider>
    </ChakraProvider>
  </React.StrictMode>
);
