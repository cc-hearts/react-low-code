import { useState } from 'react'

export interface loginForm {
  userName: string
  password: string
  email: string
}

export function useLoginForm() {
  const [loginForm, setLoginForm] = useState<loginForm>({ userName: '', password: '', email: '' })
  function changeLoginForm(field: keyof loginForm, fieldValue: loginForm[keyof loginForm]) {
    setLoginForm((val) => {
      val[field] = fieldValue
      return { ...val }
    })
  }
  return [loginForm, changeLoginForm] as const
}
