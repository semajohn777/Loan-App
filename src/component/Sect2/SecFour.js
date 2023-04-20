import React from 'react'
import './secTwo.css'
import emailArrow from '../images/correctEmailArrow.png'

const SecFour = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank You For Using thr function')
  }
  return (
    <div className="secFour">
      <div className="secFour_div_colour_one"></div>
      <div className="secFour_div_colour_two"></div>
      <div className="secFour_div_colour_green">
        <form action="">
          <input type="text" />
          <button onClick={handleSubmit}>
            <img src={emailArrow} width="60" alt="" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default SecFour
