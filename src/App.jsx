import { useState, useEffect } from "react";
import OmarIdeaBank from "./components/OmarIdeaBank";
import AddSearch from "./components/AddSearch";
import IdeaList from "./components/IdeaList";
import IdeasContextProvider from "./context/IdeasContextProvider";

function App() {
  return (
    <IdeasContextProvider>
      <OmarIdeaBank />
      <AddSearch />
      <IdeaList />
    </IdeasContextProvider>
  );
}

export default App;
