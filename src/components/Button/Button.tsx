import { Button } from "@chakra-ui/react";
import { Provider } from "../ui/provider";

interface ButtonLogin {
    funcao: () => void;
}

export const ButtonLogin = ({funcao}: ButtonLogin) =>{
    return(
        <Provider>
            <Button width={"100%"} variant="solid" onClick={funcao}>Entrar</Button>
        </Provider>
    )
}