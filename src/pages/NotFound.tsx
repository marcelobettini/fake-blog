import { useNavigate } from 'react-router-dom'

export function NotFound() {
  const navigate = useNavigate()

  return (
    <main>
      <h1>Página no encontrada</h1>
      <p>La página que estás buscando no existe.</p>
      <button onClick={() => navigate(-1)}>Volver</button>
    </main>
  )
}

