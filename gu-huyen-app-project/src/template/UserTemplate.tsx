import { Outlet } from "react-router-dom"
import NavBar from '../components/NavBar'

const UserTemplate = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default UserTemplate
