import { GlobalStyle } from "./defaultGlobalStyle/globalStyle"
import { useState } from "react"
import { v4 as uuid} from 'uuid'
import { 
  Header,
  BodyMyList,
  MainMyList,
  DivInserirItem,
  InputMyLIst
} from "./style/style"

function App() {
  const [valor, setValor] = useState('')
  const [itens, setItens] = useState([])
  const maxInputs = 10;
  
  const valorInput = (event) => {
    setValor(event.target.value)
  }

  const AdicionarInput = () => {
    if(itens.length < maxInputs ){ 
    setItens((novoInput) => [...novoInput,   <InputMyLIst key={uuid()} value={valor} readOnly />]) 
    }else{alert(`Você só pode adicionar no maximo ${maxInputs}`)}
  }
  
  return (
    <>
     <Header><h3>MyList</h3></Header>
      <BodyMyList>

        <DivInserirItem>
          <InputMyLIst type="text" placeholder="Inseir Item" maxLength={200} onChange={valorInput} />
          <button onClick={AdicionarInput}>Adicionar</button>
         
        </DivInserirItem>

        <MainMyList>
          {itens}
        </MainMyList>

      </BodyMyList>
     <GlobalStyle/>
    </>
  )
}

export default App
