import { Outlet } from "react-router-dom"
export function Layout() {
    return (
        <>
            <h1>Esto se verá siempre</h1>
            <Outlet />
        </>
    )
}