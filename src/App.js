import './App.scss'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Info from './components/Info/Info'
import Projects from './components/Projects/Projects'
import Blog from './components/Blog/Blog'

function App () {
  const [data, setData] = useState([])

  const getData = () => {
    fetch('info.json',
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
      .then(function (response) { return response.json() })
      .then(function (responseJson) { setData(responseJson) })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div data-testid="app">
      <Router>
        <Navbar name={data.name} />
        <Routes>
          <Route path="/" element={<Info data={data} />} />
          <Route path="/projects" element={<Projects projects={data.projects} />} />
          <Route path="/blog" element={<Blog blogName={data.blog} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
