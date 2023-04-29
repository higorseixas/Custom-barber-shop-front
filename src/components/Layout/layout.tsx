import { layoutInterface } from "@/interfaces/layoutInterface"
import { Footer } from "../Patterns/Footer"
import { NavBar } from "../Patterns/Navbar"

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