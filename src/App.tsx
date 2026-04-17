import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Blog } from './pages/Blog'

export function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<h1>Post Detail</h1>} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<h1>Error</h1>} />

      </Routes>

    </BrowserRouter>
  )
}

