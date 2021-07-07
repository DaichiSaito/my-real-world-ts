import { ChangeEvent, useState } from "react"
import { useUserLogin } from "../lib/hooks/useUserLogin"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login, loading } = useUserLogin()
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value)}
  const onClickLogin = () => { login({ email, password })}
  
  return (
    <>
      <div>
        <label htmlFor="email">メールアドレス</label>
        <input id="email" type="email" value={email} onChange={onChangeEmail} />
      </div>
      <div>
        <label htmlFor="password">パスワード</label>
        <input id="password" type="password" value={password} onChange={ onChangePassword} />
      </div>
      <button onClick={onClickLogin} disabled={ loading }>ログイン</button>
    </>
  )
}

export default Login