import { Outlet, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate()
  const [toFade, setToFade] = useState(false)
  let music = new Audio('/assets/music.mp3')
  music.volume = 0.5

  useEffect(() => {
    const handleSpace = (event) => {
      if (event.key === ' ') {
        console.log("Pressed " + event.key);
        music.play()
        setToFade(true)
        setTimeout(() => {
          navigate("/start")
        }, 2000);
      }
    }
    window.addEventListener('keydown', handleSpace)
    return () => {
      window.removeEventListener('keydown', handleSpace);
    };
  }, [])

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Outlet context={[toFade, setToFade]}/>
    </div>
  )
}

export default App
