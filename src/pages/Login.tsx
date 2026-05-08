import { useState, type SubmitEvent } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx"
import { useAuth } from '@/features/auth/hooks/useAuth'

import styles from './Login.module.css'
export function Login() {
    const navigate = useNavigate()

    const { user, login } = useAuth()
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string | null>(null)
    const [showPassword, setShowPassword] = useState(false)

    if (user) return <Navigate to="/users" replace />


    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const ok = login(userName, password)
        if (!ok) {
            setError('Usuario o contraseña incorrectos')
        } else {
            navigate('/users', { replace: true })
        }

    }

    return (

        <main className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.title}>Iniciar Sesión</h1>
                {error && <p className={styles.error}>{error}</p>}
                <label className={styles.label}>Usuario
                    <input
                        className={styles.input}
                        type="text"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete='username'
                    />
                </label>
                <label className={styles.label}>
                    Contraseña
                    <div className={styles.passwordWrapper}>
                        <input
                            className={styles.input}
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete='current-password'
                        />
                        <button
                            type='button'
                            className={styles.eyeBtn}
                            onClick={() => setShowPassword((prev) => !prev)}
                            aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                        >
                            {showPassword ?
                                <RxEyeClosed size={18} aria-hidden="true" />
                                :
                                <RxEyeOpen size={18} aria-hidden="true" />

                            }

                        </button>
                    </div>

                </label>
                <button className={styles.button} type='submit'>Entrar</button>
            </form>
        </main>
    )
}