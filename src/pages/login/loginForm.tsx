import LoginFooter from './loginFooter'
import { useLoginSubmit } from './hook/useSubmit'
import { useLoginForm } from './hook/useLoginForm'
import { inputField } from './constants'
const LoginForm = () => {
  const [loginForm, changeLoginForm] = useLoginForm()
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
            useLoginSubmit(loginForm, changeLoginForm)
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
