import './App.scss'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Info from './components/Info/Info'
import Projects from './components/Projects/Projects'
import Blog from './components/Blog/Blog'

function App () {
  return (
    <div data-testid="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
