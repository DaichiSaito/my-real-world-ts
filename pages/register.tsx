import { ChangeEvent, useCallback, useState } from "react";
import { useUserRegister } from "../lib/hooks/useUserRegister";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleUsernameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value),
    []
  );
  const handleEmalChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    []
  );
  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    []
  );
  const { loading, register } = useUserRegister();
  const handleRegister = () => register(username, email, password);
  return (
    <>
      <h1>ユーザー登録ページです</h1>
      <form>
        <div>
          <label>ユーザー名</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>メールアドレス</label>
          <input type="email" value={email} onChange={handleEmalChange} />
        </div>
        <div>
          <label>パスワード</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button onClick={handleRegister} disabled={loading}>
          登録
        </button>
      </form>
    </>
  );
};

export default Register;
