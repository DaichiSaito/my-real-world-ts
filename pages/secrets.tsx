import { useRequireLogin } from "../lib/hooks/useRequireLogin"

const Secrets = () => {

  useRequireLogin()
  return (
    <div>秘密のページです</div>
  )
}

export default Secrets