import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

import 'react-toastify/dist/ReactToastify.css'
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
import LoanCalculator from './pages/LoanCalculator'
// import Calculator from './utilis/Calculator'
import Toastify from './utilis/Toastify'
import ErrorPath from './pages/ErrorPath'

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
        <Route path="/calculator" element={<LoanCalculator />} />
        <Route path="/toast" element={<Toastify />} />
        <Route path="*" element={<ErrorPath />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
