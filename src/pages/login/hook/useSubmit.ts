import type { loginForm } from './useLoginForm'
import { clearObjectValue } from '../../../utils/index'
import { Post } from '../../../utils/request'
export function useLoginSubmit(form: loginForm, setForm: (...rest: any[]) => void) {
  Post('post', form)
    .then((res) => {
      console.log(res)
      setForm(clearObjectValue(res))
    })
    .catch((e) => {
      console.log(e)
    })
}
