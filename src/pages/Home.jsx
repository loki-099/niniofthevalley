import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';

const Home = () => {
  const [toFade, setToFade] = useOutletContext()  
  const [opacity, setOpacity] = useState("opacity-0")

  useEffect(() => {
    if (toFade) {
      setOpacity("opacity-100")
    }
  }, [toFade])

  return (
    <div className="w-full max-w-[1366px] h-full max-h-[768px] bg-[url('/assets/bg.png')] bg-auto bg-left-top relative flex justify-center items-center overflow-hidden">
      <div className={`bg-[#080808] w-full h-full absolute z-20 ${opacity} transition-opacity ease-out duration-1000`}></div>
      <div className='absolute left-0 top-0 flex cloud-run'>
        <img src="/assets/clouds.png" alt="clouds" className='w-auto max-w-fit h-[180px] px-10'/>
        <img src="/assets/clouds.png" alt="clouds" className='w-auto max-w-fit h-[180px] px-10'/>
      </div>
      <img src="/assets/ground.png" alt="ground" className='absolute bottom-0'/>
      <div className='relative z-10 pb-4'>
        <h1 className='text-[#111111] text-center text-8xl uppercase leading-[70px] title'>Nini<br/>of<span className='tracking-[-20px]'> </span>the<br/>Valley</h1>
        <p className='mt-14 text-4xl text-[#111111] text-center animate-pulse'>Press space to start</p>
      </div>
    </div>
  )
}

export default Home