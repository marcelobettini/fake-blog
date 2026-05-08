import { createContext, useState, type ReactNode } from "react"
const HARDCODED_USERNAME = "admin"
const HARDCODED_PASSWORD = "admin123"
const STORAGE_KEY = "auth_user"

interface AuthContextValue {
    user: string | null
    login: (username: string, password: string) => boolean
    logout: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)

interface Props {
    children: ReactNode
}

export function AuthProvider({ children }: Props) {

    const [user, setUser] = useState<string | null>(() => window.localStorage.getItem(STORAGE_KEY))

    const login = (username: string, password: string): boolean => {
        if (username === HARDCODED_USERNAME && password === HARDCODED_PASSWORD) {
            window.localStorage.setItem(STORAGE_KEY, username)
            setUser(username)
            return true
        }
        return false
    }
    const logout = () => {
        window.localStorage.removeItem(STORAGE_KEY)
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )


}
