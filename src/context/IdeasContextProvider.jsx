import React, { createContext, useState, useEffect } from "react";

export const IdeasContext = createContext({});

function IdeasContextProvider({ children } = props) {
  const [ideas, setIdeas] = useState([]);
  const [ideaValue, setIdeaValue] = useState("");

  function handleAddIdea(newIdea) {
    const ideasInDisk = JSON.parse(localStorage.getItem("ideas"));
    const newIdeaList = [...ideasInDisk, newIdea];
    setIdeas(newIdeaList);
    localStorage.setItem("ideas", JSON.stringify(newIdeaList));
  }

  function handleEditIdea(index) {
    const newIdeaList = [...ideas];
    handleDeleteIdea(index);
    openpopup();
  }

  function handleDeleteIdea(ideaTobeDeleted) {
    setIdeas(JSON.parse(localStorage.getItem("ideas")));
    const newIdeaList = ideas.filter((idea) => {
      return idea !== ideaTobeDeleted;
    });

    setIdeas(newIdeaList);
    localStorage.setItem("ideas", JSON.stringify(newIdeaList));
  }
  function searchIdea(value) {
    if (ideas.length > 0) {
      const filteredIdeas = ideas.filter((idea) => idea.indexOf(value) !== -1);
      setIdeas(filteredIdeas);
    } else {
      alert("No Ideas to search");
    }
  }
  useEffect(() => {
    if (localStorage.getItem("ideas")) {
      setIdeas(JSON.parse(localStorage.getItem("ideas")));
    }
  }, []);
  return (
    <IdeasContext.Provider
      value={{
        ideas,
        setIdeas,
        ideaValue,
        setIdeaValue,
        handleAddIdea,
        handleDeleteIdea,
        handleEditIdea,
        searchIdea,
      }}
    >
      {children}
    </IdeasContext.Provider>
  );
}

export default IdeasContextProvider;
