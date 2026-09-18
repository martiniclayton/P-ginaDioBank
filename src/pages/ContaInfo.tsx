import { Link, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ContaInfo = () =>{
    const navigate = useNavigate();

    return(
        <>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
                Informação da Conta
            </Text>

            <Link onClick={() => navigate("/Conta/2")}>Conta</Link>
        </>
    )
}

export default ContaInfo