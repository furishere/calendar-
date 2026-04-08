import React from 'react'
import imageAnime from "../assets/imageanime.jpg"
import { Notes } from './Notes'
import { HeadName } from './HeadName'

export const Calendar = () => {
  const daysInMonth = 31;

  return (
    <div className="flex justify-center mt-4 px-2">
      <div className="w-full max-w-md sm:max-w-2xl md:max-w-4xl border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <img 
          src={imageAnime} 
          alt="image" 
          className="w-full h-32 sm:h-48 md:h-60 object-cover"
        />
        <div className="p-3 flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/3 order-2 md:order-1">
            <Notes />
          </div>
          <div className="w-full md:w-2/3 order-1 md:order-2">
            <HeadName text={"Date"} />
            <HeadName text={"January 2022"} />
            <div className="grid grid-cols-7 text-[10px] sm:text-xs text-gray-500 mt-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 mt-2 text-center gap-1">
              {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
                <div
                  key={day}
                  className="p-1 sm:p-2 rounded-md hover:bg-gray-200 cursor-pointer text-xs sm:text-sm"
                >
                  {day}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}