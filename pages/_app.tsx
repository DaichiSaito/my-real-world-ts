import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useSetRecoilState, RecoilRoot } from 'recoil'
import { currentUserState } from '../lib/states/currentUser'
import { fetchCurrentUser } from '../lib/requests/currentUser'
import Layout from "../components/common/Layout"


function AppInit() {
  const setCurrentUser = useSetRecoilState(currentUserState)
  useEffect(() => {
    (async function () {
      try {
        const { currentUser } = await fetchCurrentUser()
        setCurrentUser(currentUser)
      } catch {
        setCurrentUser(null)
      }
    })()
  }, [])
  return null
}
function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <AppInit />
    </RecoilRoot>
  )
}
export default MyApp
