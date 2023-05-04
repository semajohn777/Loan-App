import React from 'react'
import Calculator from '../utilis/Calculator'
import { useState } from 'react'
import photo from '../component/images/images (16).jpeg'
import { ToastContainer, toast } from 'react-toastify'

const LoanCalculator = () => {
  const [add, setAdd] = useState(0 || '')
  const [amount, setAmount] = useState(0 || '')
  const [interest, setInterest] = useState(0 || '')
  const [year, setYear] = useState(0 || '')
  const [day, setDays] = useState(0 || '')
  const [month, setMonths] = useState(0 || '')
  const [valid, setValid] = useState(false)
  const stateFunc = {
    setAmount,
    setInterest,
    setYear,
    setMonths,
    setDays,
    setValid,
    add,
    amount,
    interest,
    year,
    month,
    day,
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      amount.trim().length === 0 ||
      amount < 1000 ||
      amount > 3000000 ||
      interest.trim().length === 0 ||
      interest < 10 ||
      interest > 100
    ) {
      setValid(toast.warning('Please fill all fields with the right values !'))
      return
    }

    const add =
      (Number(amount) * Number(interest) * Number(year || day || month)) / 100
    console.log(add, month, year)
    setAdd(add)
    // setAdd((add, amount) => {
    //   console.log(add, amount)
    // })
    console.log(amount, interest)
  }
  const prevHandler = () => {
    setAmount('')
    setInterest('')
    setYear('')
    setMonths('')
    setDays('')
    setValid(false)
    setAdd(false)
  }

  return (
    <div>
      <div className="cal_div">
        <div className="card">
          <img src={photo} alt="" />
          {/* <div className="info">
            <h6>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              tenetur cupiditate totam ea sit et fugiat voluptates excepturi sed
              pariatur ut, similique expedita velit itaque cumque nostrum
              accusamus cum ullam.
            </h6>
          </div> */}
        </div>
        <div className="cal_bg">
          {add && (
            <div>
              <h2>Details of your proposed loan</h2>
              <div className="result_div">
                <div>
                  <h4>Amount Considered: </h4> <h4>N{amount}</h4>
                </div>
                <div>
                  <h4>Rate to be paid at </h4> <h4>{interest}%</h4>
                </div>
                {/* <p> {month || day}</p> */}
                {year && (
                  <div>
                    <h4> In the period </h4> <h4>{year} Year</h4>{' '}
                  </div>
                )}
                {month && (
                  <div>
                    {' '}
                    <h4> In the period </h4> <h4>{month} Month</h4>{' '}
                  </div>
                )}
                {day && (
                  <div>
                    <h4> In the period </h4> <h4>{day} Days</h4>{' '}
                  </div>
                )}
                <div className="total">
                  <h2>Total Interest </h2>
                  <h2>N{add}</h2>
                </div>{' '}
              </div>
            </div>
          )}
          <form action="" onSubmit={handleSubmit}>
            {' '}
            <Calculator stateFunc={stateFunc} />
            {add ? (
              <button onClick={prevHandler} className="cal_btn">
                Back to Calculator
              </button>
            ) : (
              <button className="cal_btn" style={{ width: '90%' }}>
                Calculate
              </button>
            )}
          </form>

          {valid && (
            // <p>Please fill all fields with the right values</p>
            <ToastContainer />
          )}
        </div>{' '}
      </div>
    </div>
  )
}

export default LoanCalculator
