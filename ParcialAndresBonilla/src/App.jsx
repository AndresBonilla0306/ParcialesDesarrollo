import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const Loterias =['Chontico','Chance','Loteria']

function App() {


  const [Loterias, setLoterias] = useState([]) 
    const [Loteria, setLoteria] = useState('')

    const onAddCategory= () => { 
      setLoterias(list=> [...list, Loteria])
      setLoteria('')

    }
    const onSetCategory = (evt) =>{
      setLoteria(evt.target.value)
    }

  return (
    <div>
      <h1>Prueba tu suerte</h1>
      <p>Seleccione una loteria</p>
      <select name='loteria'>
        <option>
          Chontico
        </option>
        <option>
          Chance
        </option>
        <option>
          Loteria
        </option>
        </select>
      <p>Numero</p>
      <input type='text' value={Loteria} onChange={(event) => onSetCategory(event)}></input>
      <p>precio</p>
      <input type='text'></input>
      <button onClick={() => onAddCategory()}>Add</button>
      <button>Print</button>
      <ol>
        {
          Loterias.map(
            (loteria,key)=>
            {
              return <li key={key}> {loteria} </li>
            }
          )
        }
      </ol>
    </div>
  )
}

export default App
