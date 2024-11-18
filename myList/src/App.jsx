import { GlobalStyle } from "./defaultGlobalStyle/globalStyle"
import { useState } from "react"
import { v4 as uuid } from 'uuid'
import Check from "./components/iconCheck/iconCheck"

import {
  BodyMyList,
  MainMyList,
  DivInserirItem,
  DivItem,
  StyledInputMyList
} from "./style/style"

import Delete from "./components/iconDelete/iconDelete"
import { Btn } from "./components/Btn/button"
import { InputMyLIst } from "./components/input/styled"
import { Header } from "./components/header/header"
import { Footer } from "./components/footer/footer"

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

  const AlternarCheck = (id) => {
    setItens(itens.map(item => 
      item.id === id ? {...item, checked: !item.checked} : item
    ))
  } 

  

  return (
    <>
      <Header/>
      <BodyMyList>
          <DivInserirItem>
              <InputMyLIst type='text' placeholder='Inserir Item' maxLength={50} onChange={valorInput}/>
              <Btn nome='Adicionar' onClick={AdicionarInput}/>
          </DivInserirItem>
          <MainMyList>
              {itens.map((item) => {
                  return (
                    <DivItem key={item.id} >
                        <Check checked={item.checked} onClick={() => AlternarCheck(item.id)} />
                        <StyledInputMyList value={item.value} readOnly checked={item.checked} />
                        <Delete checked={item.checked} onClick={() => DeletarItem(item.id)}/>
                    </DivItem>
                  )
                })}
          </MainMyList>
      </BodyMyList>
      <Footer/>
      <GlobalStyle />
    </>
  )
}

export default App
