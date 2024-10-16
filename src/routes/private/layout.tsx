import { Outlet } from "react-router-dom";

export function Layout () {
    return (
        <><nav>Navbar</nav>
        <Outlet/>
        </>
    )
}