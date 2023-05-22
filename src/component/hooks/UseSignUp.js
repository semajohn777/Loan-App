import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { UserCreatedContext } from '../context/Context'

const UseSignUp = () => {
  const [errorState, setErrorState] = useState({
    error: null,
    loading: false,
    data: [],
    dataSuccessfull: false,
  })
  // const [error, setError] = useState(null)
  const { dispatch } = useContext(UserCreatedContext)

  const navigate = useNavigate()

  const SignUp = async (firstName, userName, email, password) => {
    console.log(firstName, userName, email, password)

    setErrorState({ error: null })

    const response = await fetch('http://localhost:5000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, firstName, email, password }),
    })
    const json = await response.json()
    if (!response.ok) {
      setErrorState({ error: toast.warning(json.error) })
    } else {
      localStorage.setItem('Users', JSON.stringify(json))
      dispatch({ type: 'SIGN_UP', payload: json })
      navigate('/')
    }
  }
  return { SignUp, errorState }
}

export default UseSignUp
