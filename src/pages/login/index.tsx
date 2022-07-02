import './index.less'
import LoginForm from './loginForm'
import LoginImage from '../../assets/images/login-bgc.pic.png'
import Logo from '../../assets/images/logo.jpg'
const LoginFeature = () => {
  return (
    <>
      <div className='login-wrapper'>
        <div className='login-container'>
          <div className='login-wrapper-right'>
            <div className='logo'>
              <img src={Logo} draggable={false} />
            </div>
            <div className='right-bgc'>
              <img src={LoginImage} draggable={false} />
            </div>
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  )
}

export default LoginFeature
