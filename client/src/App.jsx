import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='bg-[url("/main.webp")] overflow-auto bg-no-repeat bg-cover h-screen'>
      <Header />
      {/* body */}
      <section className='mt-[70px] py-2 flex h-[calc(100%-70px)] justify-end relative'>
        <video src="/demo.mp4" className='w-56 bg-slate-700 h-36 border bottom-4 left-4 fixed'></video>
        {/* varieties */}
        <section className='w-64 bg-slate-300/70  backdrop-filter backdrop-blur-sm h-full rounded-md mx-6'>

        </section>
        {/* crop quality */}
        <section className=' bg-slate-300/70  backdrop-filter backdrop-blur-sm  rounded-l-md  w-52 h-full'>
          <p>This is crop quality analytics</p>
        </section>
      </section>
    </section>
  )
}

export default App
