import Home from "./pages/Home";
import { useEffect } from "react";

function App() {
  let music = new Audio('/assets/music.mp3')
  music.volume = 0.5

  useEffect(() => {
    const handleSpace = (event) => {
      if (event.key === ' ') {
        console.log("Pressed " + event.key);
        music.play()
      }
    }
    window.addEventListener('keydown', handleSpace)
    return () => {
      window.removeEventListener('keydown', handleSpace);
    };
  }, [])

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Home/>
    </div>
  )
}

export default App
