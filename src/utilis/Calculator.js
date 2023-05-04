import React from 'react'
import '../component/pagesCss/Cal.css'
import { useState } from 'react'
// import { useReducer } from 'react'

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'day':
//       return { dayReducerFunc: true }
//     case 'month':
//       return { monthReducerFunc: true }
//     case 'year':
//       return { yearReducerFunc: true }
//     default:
//       return state
//   }
// }
const Calculator = (props) => {
  const [btnFunc, setBtnFunc] = useState(false)
  const [monthFunc, setMonthFunc] = useState(false)
  const [yearFunc, setYearFunc] = useState(false)
  // const [state, dispatch] = useReducer(reducer, {
  //   monthReducerFunc: false,
  //   dayReducerFunc: false,
  //   yearReducerFunc: false,
  // })
  // const [min, setMin] = useState(0)
  // const max = 100

  const {
    setAmount,
    setInterest,
    setYear,
    setDays,
    setMonths,
    setValid,
    add,
    amount,
    interest,
    year,
    day,
    month,
  } = props.stateFunc

  const amountOCH = (e) => {
    setAmount(e.target.value)
    setValid(false)
  }
  const interestOCH = (e) => {
    // const value = Math.max(min, Math.min(max, Number(e.target.value)))
    setInterest(e.target.value)
    setValid(false)
  }
  const yearOCH = (e) => {
    setYear(e.target.value)
    setValid(false)
  }
  const dayOCH = (e) => {
    setDays(e.target.value)
    setValid(false)
  }
  const monthOCH = (e) => {
    setMonths(e.target.value)
    setValid(false)
  }

  const dayHandle = () => {
    setBtnFunc(true)
    setMonthFunc(false)
    setYearFunc(false)
  }
  const monthHandle = () => {
    setBtnFunc(false)
    setMonthFunc(true)
    setYearFunc(false)
  }
  const yearHandle = () => {
    setBtnFunc(false)
    setMonthFunc(false)
    setYearFunc(true)
  }
  // const dayHandle = () => {
  //   setBtnFunc(true)
  //   setMonthFunc(false)
  //   setYearFunc(false)
  // }
  // const monthHandle = () => {
  //   dispatch({ type: 'month' })
  //   // setBtnFunc(false)
  //   // setMonthFunc(true)
  //   // setYearFunc(false)
  // }
  // const yearHandle = () => {
  //   setBtnFunc(false)
  //   setMonthFunc(false)
  //   setYearFunc(true)
  // }

  return (
    <div>
      {' '}
      {/* {add && (
        <div>
          <p>Amount:{Number(amount)}</p>
          <p>Interest: {add.interest}</p>
          <p>Year: {year}</p>
          <p>{add}</p>
        </div>
      )} */}
      {!add && (
        <div>
          <h1 className="">Calculator</h1>
          <div className="cal_label">
            <label htmlFor="">Amount</label>
            <div>
              {' '}
              <input
                type="number"
                value={amount || ''}
                onChange={amountOCH}
                style={{ color: 'black' }}
                className="cal_sign_inp"
              />
            </div>
          </div>
          <div className="notification_div">
            <div>1000</div>
            <div>3,000,000</div>
          </div>
          <div>
            <label htmlFor="">Interest</label>
            <div>
              <input
                type="number"
                value={interest || ''}
                onChange={interestOCH}
                style={{ color: 'black' }}
                className="cal_sign_inp"
              />
            </div>
          </div>
          <div className="notification_div">
            <div>10%</div>
            <div>100%</div>
          </div>
          <i>
            Select the period of time you wish to pay for the right{' '}
            <span className="green">Loan Calculation</span>
          </i>

          <div className="cal_btn_div">
            <button type="button" onClick={dayHandle} className=" cal_btn">
              Day(s)
            </button>
            <button type="button" onClick={monthHandle} className=" cal_btn">
              Month(s)
            </button>
            <button type="button" onClick={yearHandle} className=" cal_btn">
              Year(s)
            </button>
          </div>
          {/* {!state.yearReducerFunc === false && (
            <div>
              <label htmlFor="">Year</label>
              <div>
                <input
                  type="number"
                  value={year || ''}
                  onChange={yearOCH}
                  style={{ color: 'black' }}
                  className="cal_sign_inp"
                  // max={`5${'year'}`}
                  max="5"
                />

                <div className="notification_div">
                  <div>0</div>
                  <div>5 Years</div>
                </div>
              </div>
            </div>
          )}
          {!state.dayReducerFunc === false && (
            <div>
              <label htmlFor="">Day(s)</label>
              <div>
                <input
                  type="number"
                  value={day || ''}
                  onChange={dayOCH}
                  style={{ color: 'black' }}
                  className="cal_sign_inp"
                  max="1825"
                />
                <div className="notification_div">
                  <div>0</div>
                  <div>1,825 Days</div>
                </div>
              </div>
            </div>
          )}
          {!state.monthReducerFunc === false && (
            <div>
              <label htmlFor="">Months</label>
              <div>
                <input
                  type="number"
                  value={month || ''}
                  onChange={monthOCH}
                  style={{ color: 'black' }}
                  className="cal_sign_inp"
                  max="60"
                />
                <div className="notification_div">
                  <div>0</div>
                  <div>60 Months</div>
                </div>
              </div>
            </div>
          )} */}
          {yearFunc && (
            <div>
              <label htmlFor="">Year</label>
              <div>
                <input
                  type="number"
                  value={year || ''}
                  onChange={yearOCH}
                  style={{ color: 'black' }}
                  className="cal_sign_inp"
                  // max={`5${'year'}`}
                  min="0"
                  max="5"
                />

                <div className="notification_div">
                  <div>0</div>
                  <div>5 Years</div>
                </div>
              </div>
            </div>
          )}
          {btnFunc && (
            <div>
              <label htmlFor="">Day(s)</label>
              <div>
                <input
                  type="number"
                  value={day || ''}
                  onChange={dayOCH}
                  style={{ color: 'black' }}
                  className="cal_sign_inp"
                  min="0"
                  max="1825"
                />
                <div className="notification_div">
                  <div>0</div>
                  <div>1,825 Days</div>
                </div>
              </div>
            </div>
          )}
          {monthFunc && (
            <div>
              <label htmlFor="">Months</label>
              <div>
                <input
                  type="number"
                  value={month || ''}
                  onChange={monthOCH}
                  style={{ color: 'black' }}
                  className="cal_sign_inp"
                  min="0"
                  max="60"
                />
                <div className="notification_div">
                  <div>0</div>
                  <div>60 Months</div>
                </div>
              </div>
            </div>
          )}

          {/* {!state.monthReducerFunc === false && (
            <div>
              <label htmlFor="">Months</label>
              <div>
                <input
                  type="number"
                  // value={month || ''}
                  // onChange={yearOCH}
                  style={{ color: 'black' }}
                  className="cal_sign_inp"
                />
              </div>
            </div>
          )} */}
        </div>
      )}
    </div>
  )
}

export default Calculator
