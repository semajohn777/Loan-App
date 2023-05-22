import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { UserCreatedContext } from '../context/Context'

const UseSignIn = () => {
  const [errorState, setErrorState] = useState({
    error: null,
    loading: false,
    data: [],
    dataSuccessfull: false,
  })
  // const [error, setError] = useState(null)
  const { dispatch } = useContext(UserCreatedContext)

  const navigate = useNavigate()

  const SignIn = async (email, password) => {
    console.log(email, password)

    setErrorState({ error: null })

    const response = await fetch('http://localhost:5000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const json = await response.json()
    console.log(json)
    if (!response.ok) {
      setErrorState({ error: toast.warning(json.error) })
      localStorage.setItem('Users', JSON.stringify(json))
    } else {
      localStorage.setItem('Users', JSON.stringify(json))
      dispatch({ type: 'SIGN_UP', payload: json })
      navigate('/')
    }
  }
  return { SignIn, errorState }
}

export default UseSignIn
