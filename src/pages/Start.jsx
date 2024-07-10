import React, { useEffect, useRef, useState } from 'react'

const Start = () => {
  const [opacity, setOpacity] = useState("opacity-100")
  const [display, setDisplay] = useState("block")
  const cloud1 = useRef()
  const [gameSpeed, setGameSpeed] = useState(1)
  const [x,setX] = useState(0)
  const [x2, setX2] = useState(1596)
  const [state, setState] = useState('walking')
  const [startX, setStartX] = useState(-350)
  const [tbOpacity, setTbOpacity] = useState('opacity-0')
  const [dialog, setDialog] = useState("")
  const [dialogCounter, setDialogCounter] = useState(0)
  const [dialogOpacity, setDialogOpacity] = useState("opacity-0")
  const [arrow, setArrow] = useState('hidden')

  const dialogs = [
    "Meow! I am Yangyang, Luwiii's pet.",
    "I heard that it's your birthday",
    "So, happy birthday Enya!",
    "Luwiii has prepared something for you.",
    "Use right arrow to make me walk.",
    "When you see an item, click it.",
    "Now, enjoy! Meow!"
  ]

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
          animateCat()
        }, 1300 );
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

  const animateCat = () => {
    setStartX(0)
    setTimeout(() => {
      setState('idle')
      revealTextBox()
    }, 2500)
  }

  const revealTextBox = () => {
    setTbOpacity('opacity-100')
    let timer = setTimeout(() => {
      showDialog()
    }, 800)
    return () => clearTimeout(timer)
  }

  const showDialog = () => {
    setDialogCounter((prev) => prev + 1)
    if(dialogCounter == dialogs.length) {
      setTbOpacity('opacity-0')
      let timer = setTimeout(() => {
        setTbOpacity('hidden')
      }, 800)
      return () => clearTimeout(timer)
    }
    setDialog(dialogs[dialogCounter])
    setDialogOpacity("opacity-100")
    let timer = setTimeout(() => {
      setArrow('visible')
    }, 800)
    return () => clearTimeout(timer)
  }

  const nextDialog = () => {
    setDialogOpacity("opacity-0")
    setArrow("hidden")
    let timer = setTimeout(() => {
      showDialog()
    }, 800)
    return () => clearTimeout(timer)
  }


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
      <div className={`w-[400px] h-auto relative top-[190px] right-[190px] ${tbOpacity} transition-opacity duration-1000`}>
        <img src="/assets/text-box.png" alt="" className='w-[400px]'/>
        <p className={`text-2xl absolute top-0 bottom-[25px] left-0 right-0 p-4 flex items-center leading-6 whitespace-pre-wrap transition-opacity duration-1000 ${dialogOpacity} cursor-pointer`} onClick={nextDialog}>{dialog}
        <img src="/assets/down-arrow.svg" alt="" className={`absolute w-5 h-auto bottom-2 right-4 animate-bounce ${arrow}`}/>
        </p>
        
      </div>
      <img src={`/assets/${state}.gif`} alt="" className='absolute bottom-[60px] left-40 transition-transform ease-linear duration-[2500ms]' style={{transform: `translateX(${startX}px)`}}/>
      <img src="/assets/ground.png" alt="ground" className='absolute bottom-0'/>
    </div>
  )
}

export default Start