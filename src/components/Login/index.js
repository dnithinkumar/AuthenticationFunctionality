// Write your JS code here'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const Login = props => {
  const userDetails = {
    username: 'rahul',
    password: 'rahul@2021',
  }

  const onSuccessSubmit = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = props
    history.replace('/')
  }

  const onClickLogin = async () => {
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      onSuccessSubmit(data.jwt_token)
    }
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="login-container">
      <h1 className="heading">Please Login</h1>
      <button onClick={onClickLogin} className="button" type="button">
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
