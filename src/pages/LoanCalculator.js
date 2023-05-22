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
    const MONTH = month > 1 ? month / month : month
    console.log(MONTH)
    const add =
      (Number(amount) *
        Number(interest) *
        Number(year * 3 || day / 30 || MONTH)) /
      100
    setAdd(add)
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
        </div>
        <div className="cal_bg">
          {add && (
            <div>
              <h2>Details of your proposed loan</h2>
              <div className="result_div">
                <div>
                  <h5>Amount Considered: </h5> <h5>N{amount}</h5>
                </div>
                {day || month ? (
                  <div>
                    <h5>Monthly Interest </h5> <h5>N {Math.round(add)}</h5>
                  </div>
                ) : (
                  <div>
                    <h5>Yearly Interest </h5> <h5>N {Math.round(add)}</h5>
                  </div>
                )}
                {day || month ? (
                  <div className="total">
                    <h3>Total Monthly Returned </h3>
                    <h3>N{Number(amount) + Number(Math.round(add))}</h3>
                  </div>
                ) : (
                  <div className="total">
                    <h3>Total Yearly Returned </h3>
                    <h3>N{Number(amount) + Number(Math.round(add))}</h3>
                  </div>
                )}
                {month > 1 && (
                  <div>
                    <h3>Total in {month} month period</h3>{' '}
                    <h3>N{Number(amount) + Number(Math.round(add * month))}</h3>
                  </div>
                )}
                {year > 1 && (
                  <div>
                    <h3>Total in {year} year period</h3>{' '}
                    <h3>N{Number(amount) + Number(Math.round(add * month))}</h3>
                  </div>
                )}
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

          {valid && <ToastContainer />}
        </div>{' '}
      </div>
    </div>
  )
}

export default LoanCalculator
