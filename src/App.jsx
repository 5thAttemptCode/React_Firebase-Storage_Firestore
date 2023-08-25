import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Female from "./Components/Female"
import Male from "./Components//Male"
import All from "./Components//All"



export default function App() {
  return (
    <Router>
      <nav>
        <Link className="link-btn" to="/">HOME</Link>
        <Link className="link-btn" to="/female">WOMEN</Link>
        <Link className="link-btn" to="/male">MEN</Link>
      </nav>
      <Routes>
        <Route path="/" element={< All/>} />
        <Route path="/female" element={< Female/>} />
        <Route path="/male" element={< Male/>} />
      </Routes>
    </Router>
  )
}
