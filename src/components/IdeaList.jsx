import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faPencil,faTrash } from '@fortawesome/free-solid-svg-icons'
import IdeaCard from './IdeaCard'

export default function IdeaList(props) {
const { idea,handleDeleteIdea, handleEditIdea} = props

  return (
    <ol>
      {idea.map((idea, ideaIndex) => {
        return (
          <IdeaCard idea={idea} key={ideaIndex} handleDeleteIdea={handleDeleteIdea} handleEditIdea={handleEditIdea} index={ideaIndex}></IdeaCard>
        )
      })}
    </ol>
  )
}
