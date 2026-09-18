import { useContext, useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import { api } from "../API";
import { Box, Center, Input, Text } from "@chakra-ui/react";
import { ButtonLogin } from "../components/Button/Button";
import { LoginA } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/Storage";


interface UserData{
email: string,
password: string,
name: string
}
const Home = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [userData, setUserData] = useState<null | UserData>()
    
    useEffect(() =>{
        const getData = async () =>{
            const data: any | UserData = await api
            setUserData(data)
        }
    
        getData()
    }, []) 
    console.log(userData)

    const navigate = useNavigate()
    const { setIsLoggedIn } = useContext(AppContext)

    const validateUser  = async (email: string) =>{
        const loggedIn = await LoginA(email);

        if(!loggedIn){
            return alert("E-mail inválido");
        }
        setIsLoggedIn(true);
        changeLocalStorage({login: true})
        navigate("/Conta/1")
    }
    return (
        <Card>
            <Box background="white" borderRadius="25px" border="1px solid rgba(0,0,0,0.25)" padding={8} gap={1} display={"flex"} flexDirection={"column"}>
                        {/* {userData === null || userData === undefined ?<h1>Loading...</h1> : <h1>Informações carregadas</h1> } */}
                    <Center>
                    <Text fontWeight="medium" textStyle="6x1" fontSize={25}>Faça Login </Text>
                    </Center>
                    {userData === null || userData === undefined ? "" : <p>Bem vindo de volta {userData?.name}</p> }
                    
                    <label htmlFor="email-input">E-mail</label>
                    <Input variant="outline" type="email" name="" id="email-input" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="password-input">Senha</label>
                    <Input variant="outline" type="password" name="" id="password-input" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <ButtonLogin onClick={() => validateUser(email)}/>
                    </Box>
        </Card>
    )
}

export default Home;