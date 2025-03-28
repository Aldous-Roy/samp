import './App.css'
import Home from './Home'
import About from './About'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
function App(){
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

