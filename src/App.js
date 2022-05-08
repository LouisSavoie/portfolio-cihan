import './App.scss'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Info from './components/Info/Info'
import Projects from './components/Projects/Projects'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function App () {
  const toplink = document.querySelector('#toplink')
  const vh = document.documentElement.clientHeight / 2

  window.onscroll = function () {
    if (document.body.scrollTop >= vh || document.documentElement.scrollTop >= vh) {
      toplink.classList.remove('d-none')
    } else {
      toplink.classList.add('d-none')
    }
  }

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
    <div id="app" data-testid="app">
      <Router>
        <Navbar name={data.name} />
        <Routes>
          <Route path="/" element={<Info data={data} />} />
          <Route path="/projects" element={<Projects projects={data.projects} />} />
          <Route path="/blog" element={<Blog blogName={data.blog} />} />
        </Routes>
        <a id="toplink" className="d-none" href="#"><FontAwesomeIcon icon={faArrowUp} /></a>
        <Footer />
      </Router>
    </div>
  )
}

export default App
