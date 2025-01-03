/* eslint-disable react/prop-types */
import './Login.css'

const Login = ({clickLogin, text}) => {
  return (
    <div className="main-login">
        <button className="login-button" onClick={clickLogin}>{text}</button>
    </div>
  )
}

export default Login