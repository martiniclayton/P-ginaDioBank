import { Box, Center } from "@chakra-ui/react"
import { Provider } from "../ui/provider"

export const Footer = () => {
    return (
        <Provider>
            <Center padding={10}>
                <div>
                    Todos os direitos reservados
                </div>
            </Center>
        </Provider>
    )
}