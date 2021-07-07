// import { GetServerSideProps } from "next"
import { useRequireLogin } from "../lib/hooks/useRequireLogin"
const Settings = () => {
  useRequireLogin()
  return (
    <>
      <div>
        セッティング画面
      </div>
    </>
  )
}


// export const getServerSideProps: GetServerSideProps = async context => {
//   const { res } = context
//   return {
//     props: { res } // ページコンポーネントにpropsとして渡されます。
//     // res
//   };
// }
// export async function getServerSideProps(context) {
//   const { res } = context
//   return {
//     // props: {} // ページコンポーネントにpropsとして渡されます。
//     res
//   };
// }

export default Settings