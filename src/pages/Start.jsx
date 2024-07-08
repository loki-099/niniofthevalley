import React, { useEffect, useRef, useState } from 'react'

const Start = () => {
  const [opacity, setOpacity] = useState("opacity-100")
  const [display, setDisplay] = useState("block")
  const cloud1 = useRef()
  const [gameSpeed, setGameSpeed] = useState(1)
  const [x,setX] = useState(0)
  const [x2, setX2] = useState(1596)
  const [state, setState] = useState('idle')

  const handleDown = (event) => {
    if (event.key === 'ArrowRight') {
      setGameSpeed(5)
      setState('walking')
    }
  }
  const handleUp = (event) => {
    if (event.key === 'ArrowRight') {
      setGameSpeed(1)
      setState('idle')
    }
  }


  window.addEventListener('keydown', handleDown)
  window.addEventListener('keyup', handleUp)

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity("opacity-0")
      setTimeout(() => {
        setDisplay("hidden")
        setTimeout(() => {
          // INTRO WALK OF CAT
        }, );
      }, 1300);
    }, 5000);
    return () => clearTimeout(timer)
  }, [])

  const animate = () => {
    setX((prevX) => (prevX < -1596 ? 1596 : prevX - gameSpeed))
    setX2((prevX2) => (prevX2 < -1596 ? 1596 : prevX2 - gameSpeed))
  }
  useEffect(() => {
    const interval = setInterval(() => {
      animate() 
    }, 1000 / 30) // 60 FPS
    return () => clearInterval(interval)
  }, [gameSpeed])


  return (
    <div className="w-full max-w-[1366px] h-full max-h-[768px] bg-[url('/assets/bg.png')] bg-auto bg-left-top relative flex justify-center items-center overflow-hidden">
      <div className={`bg-[#080808] absolute w-full h-full flex flex-col items-center justify-center transition-opacity ease-in-out duration-1000 z-20 ${opacity} ${display}`}>
        <img src="/assets/loading-cat.gif" alt="" className='max-w-[300px] h-auto'/>
        <p className='text-white text-2xl'>Hi Enya! I hope you like my gift. &lt;3</p>
        <p className='text-white text-2xl'>- luwiii</p>
      </div>
      <div className='absolute left-0 top-0 flex'>
        <img src="/assets/clouds.png" alt="clouds" className={`w-auto max-w-fit h-[180px] px-10 absolute`} style={{transform: `translateX(${x}px)`}} ref={cloud1}/>
        <img src="/assets/clouds.png" alt="clouds" className={`w-auto max-w-fit h-[180px] px-10 absolute`} style={{transform: `translateX(${x2}px)`}} ref={cloud1}/>
      </div>
      <img src={`/assets/${state}.gif`} alt="" className='absolute bottom-[60px] left-20'/>
      <img src="/assets/ground.png" alt="ground" className='absolute bottom-0'/>
    </div>
  )
}

export default Start