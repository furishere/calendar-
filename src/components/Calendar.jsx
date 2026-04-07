import React from 'react'
import imageAnime from "../assets/imageanime.jpg"
import lanadelray from "../assets/lanadelray.png"
import { NotesText } from './NotesText'
import { HeadName } from './HeadName'

export const Calendar = () => {
  return <div className='flex justify-center items-center mt-10'>
    <div className='bg-blue-800 border rounded-md w-lg h-150 flex flex-col'>
    <div className='bg-orange-400 '>
    <img src={lanadelray} alt="image" className='w-full object-cover'/>
    </div>
    <div className='bg-green-500 h-90 flex'>
    <div className='bg-pink-400 w-full'>
    <HeadName text={"Notes"}/>
    <div className='m-4 '>
    <NotesText />
    <NotesText />
    <NotesText />
    <NotesText />
    <NotesText />
    <NotesText />
    <NotesText />
    <NotesText />
    </div>
    </div>
    <div className='bg-yellow-300 w-full'>
    <HeadName text={"Dates"}/>
    </div>
    </div>
    </div>
  </div>
}
