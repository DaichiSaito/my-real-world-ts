import { User } from './../types/user';
import axios from "axios"
export const fetchCurrentUser = async () => {
  const user = window.localStorage.getItem("user")
  if (!user) { return { currentUser: null } }

  try {
    const res = await axios.get("https://conduit.productionready.io/api/user", {
      headers: {
          authorization: 'Token ' + JSON.parse(user).token
        },
    })

    const currentUser = res.data.user
    return {
      currentUser
    }
  } catch {
    return {
      currentUser: null
    }
  }
  // const { data: currentUser } = useSWR("user", storage)
  // if (!currentUser) return null;

  // console.log(currentUser)
}