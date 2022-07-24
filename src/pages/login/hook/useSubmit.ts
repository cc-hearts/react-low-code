/* eslint-disable @typescript-eslint/no-unused-vars */
import type { loginForm } from './useLoginForm'
import { clearObjectValue } from '../../../utils/index'
import { Post } from '../../../utils/request'
import type { NavigateFunction } from 'react-router-dom'
export function loginSubmit(form: loginForm, setForm: (...rest: any[]) => void, toPath: NavigateFunction) {
  Post('sign/login', form)
    .then(() => {
      // 判断状态
      setForm(clearObjectValue(form))
      // toPath('/home')
    })
    .catch((e) => {
      console.log(e)
    })
}
