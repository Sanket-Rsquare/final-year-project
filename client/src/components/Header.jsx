import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <header className='py-2 z-10 h-[60px] px-4 border-b-2 border-dotted  backdrop-filter backdrop-blur-sm  w-full fixed top-0'>
      <section className='w-[90%] mx-auto flex justify-between items-center'>
        <div className='flex border-2 border-purple-500 items-center rounded-full font-semibold bg-slate-600 border border-slate-700 py-1 px-3'>
          <img className='w-6 h-6 p-1' src="/favicon.png" alt="logger-drone" />
          <h6 className='text-white text-xs uppercase'>logger-drone</h6>
        </div>
        <nav className='flex items-center space-x-2 text-xs'>
          <Link className='underline' to={"/about"}>About</Link>
          <Link className='underline' to={"/contact"}>Contact</Link>
          <Link className='rounded-full py-2 px-4 bg-purple-600 text-white text-xs font-semibold'>LOGOUT</Link>
        </nav>
      </section>
    </header>
  )
}

export default header