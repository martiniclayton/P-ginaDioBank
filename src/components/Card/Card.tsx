import styled from "styled-components"
import { Provider } from "../ui/provider"
import { Box, Button, Center, HStack, Text, Input, Container } from "@chakra-ui/react"
import { LoginA } from "../../services/login"
import { ButtonLogin } from "../Button/Button"
import { useState, useEffect } from "react"
import { api } from "../../API"
import { BrowserRouter } from "react-router-dom"


export const Card = ({children}: any) => {
    

    return (
        <Provider>
            <Container fluid>
                <Box px="5" minHeight="100vh">
                    {children} 
                    
                </Box>
            </Container>
        </Provider>
    )
}