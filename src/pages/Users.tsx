import { useAuth } from "@/features/auth/hooks/useAuth"

export function Users() {
    const { user } = useAuth()
    return <h1>Listado de usuarios {user}</h1>
}