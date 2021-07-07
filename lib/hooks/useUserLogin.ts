import { useState } from 'react';
import { User } from './../types/user';
import axios from "axios"
import router from 'next/router';
import { mutate } from "swr";
import { useRecoilState } from 'recoil';
import { currentUserState } from "../states/currentUser"

type LoginResponse = {
  user: User
}

type Props = {
  email: string
  password: string
};

export const useUserLogin = () => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useRecoilState(currentUserState)
  const login = async (props: Props) => {
    const { email, password } = props
    setLoading(true)
    try {
      const { data } = await axios.post<LoginResponse>("https://conduit.productionready.io/api/users/login", { user: { email, password } })
      setLoading(false)
      window.localStorage.setItem("user", JSON.stringify(data.user))
      // mutate("user", data.user)
      setUser(data.user)
      router.push("/articles");
    } catch (err) {
      console.log(err)
      setLoading(true)
      alert("ログインに失敗しました")
    }
  }

  return { login, loading }
}