import React from 'react'
import imageAnime from "../assets/imageanime.jpg"
import lanadelray from "../assets/lanadelray.png"
import { NotesText } from './NotesText'
import { HeadName } from './HeadName'
import { Notes } from './Notes'

export const Calendar = () => {
  const daysInMonth = 31; 

  return <div className='flex justify-center items-center mt-10'>
    <div className=' border border-gray-400 shadow-xl/30 rounded-md w-lg h-160 flex flex-col p-3 '>
    <div>
    <img src={imageAnime} alt="image" className='w-full object-cover rounded-sm'/>
    </div>
    <div className= 'h-90 flex'>
    <Notes />
    <div className='w-full'>
    <HeadName text={"Date"}/>
    <HeadName text={"January 2022"}/>
    <div className="grid grid-cols-7 text-center text-sm font-display text-gray-500">
    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
      <div key={d}>{d}</div>
      ))}
    </div>
    <div className="grid grid-cols-7 mt-2 text-center">
  {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
    <div
      key={day}
      className="p-2 rounded-md hover:bg-gray-200 cursor-pointer"
    >
      {day}
    </div>
  ))}
</div>
    </div>
    </div>
    </div>
  </div>
}
