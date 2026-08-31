import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"

interface Props{
    children: React.ReactNode
}

export const Layout = ({children}: Props) =>{
    return(
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}