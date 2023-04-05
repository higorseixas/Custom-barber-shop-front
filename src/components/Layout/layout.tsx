import { layoutInterface } from "@/interfaces/layoutInterface"
import { Footer } from "../Footer/footer"
import { NavBar } from "../Navbar/navbar"

export const Layout = ({children}: layoutInterface) => {
    return (
        <>
            <NavBar/>
                <div>
                    {children}
                </div>
            <Footer />
        </>
    )
}