import { BrowserRouter, Route, Routes } from "react-router-dom"
import DiagnosisPage from "./pages/diagnosisPage"
import LandingPage from "./pages/LandingPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/diagnosis" element={<DiagnosisPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
