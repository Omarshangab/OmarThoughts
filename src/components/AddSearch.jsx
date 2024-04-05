import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function AddSearch(props) {

const {handleAddIdea,ideaValue,setIdeaValue,idea, setIdea} = props

//search for certain idea values
 function searchIdea(value) {
  const searchForIdea = idea.filter(idea => idea.value === value)
  console.log(searchForIdea)
 }



  return (
    <div>
      <div className=' flex w-full justify-center'>
        <input type="text" placeholder='Search Existing Idea or Add New One' value={ideaValue} onChange={(e)=>{setIdeaValue(e.target.value)}} className='border border-black text-black rounded p-1 flex-1 mx-6 sm:max-w-lg '/>
        <div className='mr-6'>
        <button onClick={()=>{searchIdea(ideaValue)}} className=' text-white  bg-slate-600 border-2 border-slate-600 p-2 px-4 gap-2 rounded  hover:opacity-75 shadow-xl'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        <button onClick={()=>{handleAddIdea(ideaValue)}} className=' text-white  bg-slate-600 border-2 border-slate-600 p-2 px-4 ml-2 gap-2 rounded hover:opacity-75 shadow-xl'>Add</button>
        </div>
      </div>
    </div>
  )
}
