import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { IdeasContext } from "../context/IdeasContextProvider";

export default function IdeaCard({ idea }) {
  const { handleDeleteIdea, handleEditIdea } = useContext(IdeasContext);

  return (
    <ul className=" p-2 m-6">
      <li className=" flex flex-row justify-between p-2 items-center border-2 bg-slate-700 border-slate-700 rounded-md shadow-xl">
        <div>
          <p>{idea}</p>
        </div>
        <div>
          <button
            onClick={() => {
              handleEditIdea(index);
            }}
            className=" text-slate-200  bg-slate-600 border-2 border-slate-600 p-2 px-4 gap-2 rounded  hover:opacity-75 shadow-xl"
          >
            <FontAwesomeIcon icon={faPencil} />
          </button>
          <button
            onClick={() => {
              handleDeleteIdea(idea);
            }}
            className=" text-slate-200  bg-slate-600 border-2 border-slate-600 p-2 px-4 ml-2 gap-2 rounded hover:opacity-75 shadow-xl"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </li>
    </ul>
  );
}
