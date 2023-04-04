import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HongList from "./HongList";

function App() {
  return (
    <div className="App">
      <Nav />
      <HongList hogs={hogs} />
    </div>
  );
}

export default App;
