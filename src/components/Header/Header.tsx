import { useContext } from 'react'
import { Provider } from '../ui/provider'
import './header.css'

import { Box, Button, Flex, Spacer, Stack, Text } from "@chakra-ui/react"
import { AppContext } from '../AppContext'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../../services/Storage'

export const Header = () => {

    const { user, isLoggedIn, setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate()

    const logout = () =>{
        changeLocalStorage({login: false})
        setIsLoggedIn(false);
        navigate("/");
    }

    return (
        <Provider>
            <Flex backgroundColor={"black"} alignItems={"center"} paddingX={"50px"}>
                <Flex className='header' width={"100%"}>
                    <a href="">Dio Bank</a>
                    <Spacer />
                    {isLoggedIn && (
                    <div className='nav'>
                        <a href="">Menu</a>
                        <a href="">Menu</a>
                        <a href="">Menu</a>
                        <a href="">Menu</a>
                    </div>
                    )}
                </Flex>
                <Spacer />
                {isLoggedIn && (
                    <Button onClick={()=>logout()} colorPalette="blue" variant={"solid"}>Sair</Button>
                )}
            </Flex>
        </Provider>
    )
}