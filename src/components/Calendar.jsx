import React from 'react'
import imageAnime from "../assets/imageanime.jpg"
import lanadelray from "../assets/lanadelray.png"
import { NotesText } from './NotesText'
import { HeadName } from './HeadName'
import { Notes } from './Notes'

export const Calendar = () => {
  return <div className='flex justify-center items-center mt-10'>
    <div className=' border border-gray-400 shadow-2xl rounded-md w-lg h-150 flex flex-col p-3'>
    <div>
    <img src={imageAnime} alt="image" className='w-full object-cover rounded-sm'/>
    </div>
    <div className= 'h-90 flex'>
    <Notes />
    <div className='w-full'>
    <HeadName text={"Date"}/>
    <HeadName text={"2022 January"}/>
    <div className='grid grid-cols-7'>
    </div>
    </div>
    </div>
    </div>
  </div>
}
