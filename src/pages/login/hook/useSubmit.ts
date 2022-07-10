import type { loginForm } from './useLoginForm'
import { clearObjectValue } from '../../../utils/index'
import { Post } from '../../../utils/request'
import type { NavigateFunction } from 'react-router-dom'
export function loginSubmit(form: loginForm, setForm: (...rest: any[]) => void, toPath: NavigateFunction) {
  Post('post', form)
    .then((res) => {
      setForm(clearObjectValue(res))
    })
    .catch((e) => {
      console.log(e)
    })
  toPath('/home')
}
