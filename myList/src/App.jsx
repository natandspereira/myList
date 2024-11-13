import { GlobalStyle } from "./defaultGlobalStyle/globalStyle"
import { useState } from "react"
import { v4 as uuid } from 'uuid'
import {
  Header,
  BodyMyList,
  MainMyList,
  DivInserirItem,
  InputMyLIst,
  DivItem
} from "./style/style"

function App() {
  const [valor, setValor] = useState('')
  const [itens, setItens] = useState([])
  const maxInputs = 10;

  const valorInput = (event) => {
    setValor(event.target.value)
  }

  const AdicionarInput = () => {
    if (itens.length < maxInputs) {
      setItens((novoInput) => [...novoInput, { id:uuid(), value:valor }])
    } else { alert(`Você só pode adicionar no maximo ${maxInputs} itens`) }
  }

  const DeletarItem = (id) => {
    setItens(itens.filter(item => item.id !== id));
  }

  return (
    <>
      <Header><h3>MyList</h3></Header>
      <BodyMyList>

        <DivInserirItem>
          <InputMyLIst type="text" placeholder="Inseir Item" maxLength={200} onChange={valorInput}/>
          <button onClick={AdicionarInput}>Adicionar</button>
        </DivInserirItem>

        <MainMyList>
          
            {itens.map((item) => {
              return (
                <DivItem style={{ position: 'relative' }}>
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  height="24px" 
                  viewBox="0 -960 960 960" 
                  width="30px" 
                  fill="#BD4C31" 
                  style={{position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)'}}
                  >
                  <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                  
                  <InputMyLIst key={item.id} value={item.value} readOnly />

                   <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      height="40px" 
                      viewBox="0 -960 960 960" 
                      width="30px" 
                      fill="#BD4C31"
                      style={{position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)'}}
                      onClick={() => DeletarItem(item.id)}
                      >
                      
                      <path d="M267.33-120q-27.5 0-47.08-19.58-19.58-19.59-19.58-47.09V-740H160v-66.67h192V-840h256v33.33h192V-740h-40.67v553.33q0 27-19.83 46.84Q719.67-120 692.67-120H267.33Zm425.34-620H267.33v553.33h425.34V-740Zm-328 469.33h66.66v-386h-66.66v386Zm164 0h66.66v-386h-66.66v386ZM267.33-740v553.33V-740Z" />
                    </svg>
                </DivItem>
              )
            })}
          
        </MainMyList>

      </BodyMyList>
      <GlobalStyle />
    </>
  )
}

export default App
