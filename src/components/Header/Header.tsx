import { Provider } from '../ui/provider'
import './header.css'

import { Box, Button, Stack, Text } from "@chakra-ui/react"

export const Header = () =>{
    return(
        <Provider>
        <div className='header'>
            <a href="">Dio Bank</a>

            <div className='nav'>
                <a href="">Menu</a>
                <a href="">Menu</a>
                <a href="">Menu</a>
                <a href="">Menu</a>
            </div>

            <a href=""><Button colorPalette="blue" variant={"solid"}>Botão CTA</Button></a>
        </div>
        </Provider>
    )
}