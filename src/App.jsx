import { useState, useEffect} from 'react'
import OmarIdeaBank from './components/OmarIdeaBank'
import AddSearch from './components/AddSearch'
import IdeaList from './components/IdeaList'



function App() {
  const [idea, setIdea] = useState(['be proactive', 'begin with the end in mind','omar',])
  const [ideaValue, setIdeaValue] = useState('')

//save the data so that when we refresh the page we still have the data 
useEffect(() => {
  if (idea && idea.length) {
    localStorage.setItem('idea', JSON.stringify(idea))
  }
}, [idea]) 

//get the data from the local storage 
useEffect(() => {
  const storedIdea = localStorage.getItem('idea');
  if (storedIdea) {
    setIdea(JSON.parse(storedIdea))
  }
}, [])
 
function openpopup() {
  document.getElementById('popup').style.display = 'block'
}


  
function handleAddIdea(newIdea) {
  const newIdeaList = [...idea, newIdea]
  setIdea(newIdeaList)

}

function handleEditIdea(index) {
  const newIdeaList = [...idea]
  handleDeleteIdea(index)
  openpopup()

}

function handleDeleteIdea(index) {
  const newIdeaList = idea.filter((idea, ideaIndex) =>{
    return ideaIndex!== index
  }) 
   
    setIdea(newIdeaList)
}



  return (
    <>
    <OmarIdeaBank handleAddIdea={handleAddIdea} />
    <AddSearch handleAddIdea={handleAddIdea} ideaValue={ideaValue} setIdeaValue={setIdeaValue} idea={idea} setIdea={setIdea} />
    <IdeaList handleAddIdea={handleAddIdea} idea={idea} setIdea={setIdea} handleDeleteIdea={handleDeleteIdea} handleEditIdea={handleEditIdea}/>

    </>
  )
}

export default App
