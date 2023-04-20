import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
// ..

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './component/navbar/NavBar'
import Home from './pages/Home'
import './App.css'
// import LoanCriteria from './pages/LoanCriteria'
import AbtUs from './pages/AbtUs'
import Signup from './pages/Signup'
import SignIn from './pages/SignIn'
import Business from './pages/Business'
import PersonalLoan from './pages/PersonalLoan'
import CarLoan from './pages/CarLoan'

// import Navbar from './component/Navbar';
AOS.init()
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AbtUs />} />
        <Route path="/business" element={<Business />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/personal" element={<PersonalLoan />} />
        <Route path="/car" element={<CarLoan />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
