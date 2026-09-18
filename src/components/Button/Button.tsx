import { Button } from "@chakra-ui/react";
import { Provider } from "../ui/provider";

interface ButtonLogin {
    onClick: () => void;
}

export const ButtonLogin = ({onClick}: ButtonLogin) =>{
    return(
        <Provider>
            <Button width={"100%"} variant="solid" onClick={onClick}>Entrar</Button>
        </Provider>
    )
}