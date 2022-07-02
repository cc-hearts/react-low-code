/**
 * @author heart
 * @description 常量
 * @Date 2022-07-02
 */
import type { loginForm } from './hook/useLoginForm'
type loginFormField = {
  field: keyof loginForm
  placeHolder: string
}
export const inputField: Array<loginFormField> = [
  {
    field: 'userName',
    placeHolder: 'Full Name',
  },
  {
    field: 'email',
    placeHolder: 'Email Address',
  },
  {
    field: 'password',
    placeHolder: 'Password',
  },
]
