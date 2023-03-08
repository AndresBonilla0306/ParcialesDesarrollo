import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const Loterias =['Chontico','Chance','Loteria']

const Precios = ['Valores','']

function App() {

  const [Precios,setPrecios] = useState([])
  const [Precio,setPrecio] = useState('')


  const [Loterias, setLoterias] = useState([]) 
    const [Loteria, setLoteria] = useState('')

    const onAddCategory= () => { 
      setLoterias(list=> [...list, Loteria])
      setLoteria('')
    }
    const onSetCategory = (evt) =>{
      setLoteria(evt.target.value)
      setPrecio(evt.target.value)
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
      <input minLength='3' maxLength='4' type='text' value={Loteria} onChange={(event) => onSetCategory(event)}></input>
      <p>precio</p>
      <input type='text'></input><br></br>
      <button onClick={() => onAddCategory()}>Add</button>
      <button>Print</button>
      <ol>
        {
          Loterias.map(
            (loteria,key)=>
            {
              return <table>
                <thead>
                  <tr>
                    <th>Loteria</th><th>Número</th>
                  </tr>
                </thead>
                <tr>
                 <th>Loteria</th><th>{loteria}</th>
                </tr>
                </table>
            }
          )
        }
      </ol>
    </div>
  )
}

export default App
