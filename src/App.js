import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routing from "./routing";
import ScrollToTop from "./app-ui/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Routing />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
