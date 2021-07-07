import Link from 'next/link'
import { useEffect } from 'react'
import { useAllArticles } from '../lib/hooks/useAllArticles'

const Articles = () => {
  const { articles, loading, getArticles } = useAllArticles()
  
  useEffect(() => {
    getArticles()
  }, [])

  return (
    <>
      {loading ? (
        <div>ローディング</div>
      ) : (
          <div>
            <header>
              <Link href="/settings">設定</Link>
            </header>
          {
            articles.map((article) => (
              <div key={article.slug}>
                <Link href={`/articles/${article.slug}`}><a>タイトル: {article.title}</a></Link>
                
                <br />
                Slug: {article.slug}
                <hr />
              </div>
            ))
          }
        </div>
      )}
    </>
  )
}

export default Articles
