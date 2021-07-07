import { useEffect } from "react";
import { useCurrentUser } from "../../lib/hooks/useCurrentUser";
import Link from "next/link";

const Navbar = () => {
  const { currentUser } = useCurrentUser();
  useEffect(() => {});
  return (
    <>
      {currentUser ? (
        <>
          ログイン中です
          <Link href="/articles">
            <a>記事一覧</a>
          </Link>
          <Link href="/settings">
            <a>セッティング</a>
          </Link>
        </>
      ) : (
        <>
          未ログインです
          <Link href="/articles">
            <a>記事一覧</a>
          </Link>
          <Link href="/login">
            <a>ログインページへ</a>
          </Link>
          <Link href="/register">
            <a>ユーザー登録ページへ</a>
          </Link>
        </>
      )}
    </>
  );
};

export default Navbar;
