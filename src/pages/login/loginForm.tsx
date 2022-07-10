import LoginFooter from './loginFooter'
import { loginSubmit } from './hook/useSubmit'
import { useLoginForm } from './hook/useLoginForm'
import { inputField } from './constants'

import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const [loginForm, changeLoginForm] = useLoginForm()

  const navigate = useNavigate()
  return (
    <div className='login-wrapper-left'>
      <div className='login-title'>Create Account</div>
      <form className='login-wrapper-form'>
        {inputField.map((val) => {
          return (
            <input
              placeholder={val.placeHolder}
              value={loginForm[val.field]}
              key={val.field}
              onChange={(v) => {
                changeLoginForm(val.field, v.target.value)
              }}
            />
          )
        })}
      </form>
      <div className='login-submit'>
        <button
          onClick={() => {
            loginSubmit(loginForm, changeLoginForm, navigate)
          }}
        >
          Create Account
        </button>
      </div>
      <LoginFooter />
    </div>
  )
}

export default LoginForm
