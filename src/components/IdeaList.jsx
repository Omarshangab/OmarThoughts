import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import IdeaCard from "./IdeaCard";
import { IdeasContext } from "../context/IdeasContextProvider";

export default function IdeaList(props) {
  const { ideas } = useContext(IdeasContext);

  return (
    <ol>
      {ideas.map((idea, idx) => {
        return (
          <IdeaCard key={idx} idea={idea}>
            {" "}
          </IdeaCard>
        );
      })}
    </ol>
  );
}
