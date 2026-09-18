import { Box, Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { CardInfo } from "../components/CardInfo";
import { api } from "../API";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../components/AppContext";

export interface User {
    email: string,
    password: string,
    name: string,
    balance: number,
    id: string
}

const Conta = () => {

    const { isLoggedIn } = useContext(AppContext)
    const {id} = useParams()
    console.log(id);

    const navigate = useNavigate()

    !isLoggedIn && navigate("/");


    const [user, setUser] = useState<User>()

    useEffect(()=>{
        const getData = async () =>{
            const dados: any | User = await api
            setUser(dados)
        }
        getData()
    },[])

    if(user && id !== user.id){
        navigate("/")
    }


    const actualDate = new Date()

    return (
        <Center>
            <SimpleGrid columns={2} gap={8} paddingTop={'16px'}>
                {user ? (
                    <>
                    <CardInfo mainContent={`Bem vindo ${user.name}`} content={`${actualDate.getDate()} / ${actualDate.getMonth()} / ${actualDate.getFullYear()} ${actualDate.getHours()}:${actualDate.getMinutes()} `} />
                    <CardInfo mainContent={"Saldo"} content={`R$ ${user.balance}`} />
                    </>
                ) : (
                    <Center>
                        <Spinner  size={"xl"}/>
                    </Center>
                )}
            </SimpleGrid>
        </Center>
    )
}

export default Conta;