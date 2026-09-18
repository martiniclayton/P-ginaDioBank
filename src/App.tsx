import { Layout } from "./components/Layout"
import { Card } from "./components/Card/Card"
import styled from "styled-components"
import { createContext, useState } from 'react'

import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HiH1 } from "react-icons/hi2"
import Home from "./pages/Home"
import Conta from "./pages/Conta"
import { Provider } from "./components/ui/provider"
import ContaInfo from "./pages/ContaInfo"
import { AppContextProvider } from "./components/AppContext"
import MainRoutes from "./routes"
import { createLocalStorage, getAllLocalStorage } from "./services/Storage"


const Box = styled.div`
  background-color: orange;
  
`
!getAllLocalStorage() && createLocalStorage()

function App() {
  // const [ value, setValue] = useState(0)
  // const [ outroValue, setoutroValue] = useState(1)


  // ISSO REPRESENTA UM OBJETO

  // const value = {
  //   value: 0,
  //   setValue: (p) =>{
  //     value = p
  //   }
  // }

  return (
    <>
      <BrowserRouter>
      <AppContextProvider>
        <Provider>
          <Layout>
            <MainRoutes/>
          </Layout>
        </Provider>
      </AppContextProvider>
      </BrowserRouter>
      {/* <div>
        <button onClick={() => setValue(value +1)}>add</button>
        <button onClick={() => setValue(value -1)}>Remover</button>
        <h1>{value}</h1>

        <button onClick={() => setoutroValue(outroValue +1)}>add</button>
        <button onClick={() => setoutroValue(outroValue -1)}>Remover</button>
        <h1>{outroValue}</h1>
      </div> */}
    </>
  )
}

export default App
