import { useState } from 'react'

import './App.css'
import ModalWnd from './components/Modal/ModalWnd'

function App() {
  const [modalState, setModalState] = useState(false);

  return (    
      <div className="App">
      <ModalWnd call={modalState} onDestroy={()=> setModalState(false) } />
      <button onClick={()=> setModalState(true)}>MODAL WINDOW</button>
      </div>     
    
  )
}

export default App
