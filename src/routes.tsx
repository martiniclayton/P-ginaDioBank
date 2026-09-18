import { Route, Routes } from "react-router-dom";
import Conta from "./pages/Conta";
import ContaInfo from "./pages/ContaInfo";
import Home from "./pages/Home";
import { useContext } from "react";
import { AppContext } from "./components/AppContext";

const MainRoutes = () => {

    const { isLoggedIn } = useContext(AppContext);
    
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path='/Conta/:id' element={isLoggedIn ?  <Conta/> : <Home/>}></Route>
            <Route path='/ContaInfo/' element={<ContaInfo />}></Route>
        </Routes>
    )

}

export default MainRoutes;