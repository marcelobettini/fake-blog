import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Blog } from './pages/Blog'
import { Post } from './pages/Post'
import { Login } from './pages/Login'
import { AuthProvider } from './features/auth/context/AuthContext'
import { Users } from './pages/Users'
import { ProtectedRoute } from './components/ProtectedRoute'

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Post />} />
            <Route path="/about" element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/users' element={<Users />} />
            </Route>
          </Route>
          <Route path="*" element={<h1>Error</h1>} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

