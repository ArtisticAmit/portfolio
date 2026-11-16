import React from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import Work from './pages/Work'
import About from './pages/About'
import ProjectDetail from './pages/ProjectDetail'

import Footer from './components/Footer'

// Case studies read as standalone documents: no app bar (their own back
// arrow handles navigation), and no top space reserved for it.
function Shell() {
  const { pathname } = useLocation()
  const isCaseStudy = pathname.startsWith('/project/')

  return (
    <div className={`main-container${isCaseStudy ? ' is-case-study' : ''}`}>
      {!isCaseStudy && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Shell />
    </Router>
  )
}

export default App
