import { useState } from 'react'
//Modulos de firebase
import appFirebase from '../src/credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFirebase)

//importar componentes
import Login from '../src/components/login'
import Home from '../src/components/Home'

import './App.css'

function App() {
  
  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if (usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else
    {
      setUsuario(null)
    }
  })

  return (
    <div>
      {usuario ? <Home correoUsuario = {usuario.email} /> : <Login/>}
    </div>
  )
}

export default App
