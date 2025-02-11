import { useContext } from 'react'
import './App.css'
import Display from './Components/Display'
import Player from './Components/Player'
import Sidebar from './Components/sidebar'
import {playerContext} from './context/Playercontext'


function App() {
  const{audioRef,track}=useContext(playerContext)

  return (
    <>
      <div className="h-screen bg-black">
        <div className="h-[90%] flex ">
          <Sidebar />
          <Display/>
        </div>
        <Player/>
        <audio ref={audioRef} src={track.file} preload='auto'>
          
        </audio>
        
      </div>
    </>
  )
}

export default App

