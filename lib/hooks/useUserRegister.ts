import { useRouter } from 'next/router';
import { User } from './../types/user';
import axios from 'axios';
import { useState } from 'react';
export const useUserRegister = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  type IUserResponse = {
    user: User
  }
  
  const register = async (username: string, email: string, password: string) => {
    setLoading(true)

    try {
      const res = await axios.post<IUserResponse>("https://conduit.productionready.io/api/users", { user: { username, email, password } })
      console.log(res.data.user)
      setLoading(false)
      router.push("/login")

    } catch (err) {
      setLoading(false)
    }
  }
  return { loading, register }
}