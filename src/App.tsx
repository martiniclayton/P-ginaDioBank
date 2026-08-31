import { Layout } from "./components/Layout"
import { Login } from "./components/Login/Login"
import styled from "styled-components"

import { ChakraProvider } from "@chakra-ui/react"


const Box = styled.div`
  background-color: orange;
`

function App() {

  return (
    <>
      <Layout>
      <Login/>
    </Layout>
    </>
  )
}

export default App
