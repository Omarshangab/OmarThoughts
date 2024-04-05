import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

export default function OmarIdeaBank(props) {
  const {handleAddIdea} = props
  const [ideaValue, setIdeaValue] = useState('')


  function open() {
    document.getElementById("openpopup").addEventListener("click", function () {
        document.getElementById('popup').style.display = 'block'
  })
}

function close() {

        document.getElementById('popup').style.display = 'none'
  
}


  return (
    <><div className='p-4 mb-2 '>
          <button id='openpopup' className='flex justify-center items-center text-3xl md:text-4xl lg:text-5xl p-4  mx-auto ' onClick={open}>Omar's Idea Bank</button>
      </div>
      
      <div id='popup' className=' hidden fixed bg-black bg-opacity-30 w-full h-full left-0 top-0 overflow-auto '>
        <div id='popup-content' className=' bg-slate-700 p-10 flex justify-center w-10/12 max-w-2xl m-96 mx-auto border-2 border-black rounded-md '>
            <input type="text" placeholder='whats the idea omar?'className='border-black text-black rounded p-1 flex-1 mx-6 sm:max-w-lg ' value={ideaValue} onChange={(e)=>{setIdeaValue(e.target.value)}}/>
            <button id='closepopup' className=' text-white  bg-slate-600 border-2 border-slate-600 p-2 px-4 ml-2 gap-2 rounded hover:opacity-75 shadow-xl' onClick={()=>{handleAddIdea(ideaValue); close(); setIdeaValue('')}}>Add</button>
            <button className=' text-white  bg-slate-600 border-2 border-slate-600 p-2 px-4 ml-2 gap-2 rounded hover:opacity-75 shadow-xl' onClick={()=>{close(); setIdeaValue('')}}><FontAwesomeIcon icon={faX}/></button>

        </div>
      </div>
      
      </>
  )
}