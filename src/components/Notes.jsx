import React from 'react'
import { NotesText } from './NotesText'
import { HeadName } from './HeadName'

export const Notes = () => {
  return    <div className='w-full'>
      <HeadName text={"Notes"}/>
      <div className='m-4 '>
      <NotesText />
      <NotesText />
      <NotesText />
      <NotesText />
      <NotesText />
      <NotesText />
      <NotesText />
      </div>
      </div>
}
