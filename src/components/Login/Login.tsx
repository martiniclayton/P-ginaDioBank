import styled from "styled-components"
import { Provider } from "../ui/provider"
import { Box, Button, Center, HStack, Text, Input, Container } from "@chakra-ui/react"
import { LoginA } from "../../services/login"
import { ButtonLogin } from "../Button/Button"
import { useState } from "react"





export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Provider>
            <Container fluid>
                <Box px="5" minHeight="100vh">
                    <Box background="white" borderRadius="25px" border="1px solid rgba(0,0,0,0.25)" padding={8} gap={1} display={"flex"} flexDirection={"column"}>
                    <Center>
                    <Text fontWeight="medium" textStyle="6x1" fontSize={25}>Faça Login</Text>
                    </Center>
                    <label htmlFor="email-input">E-mail</label>
                    <Input variant="outline" type="email" name="" id="email-input" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="password-input">Senha</label>
                    <Input variant="outline" type="password" name="" id="password-input" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <ButtonLogin funcao={LoginA}/>
                    </Box>
                </Box>
            </Container>
        </Provider>
    )
}