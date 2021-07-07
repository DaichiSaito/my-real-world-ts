import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useArticle } from '../../lib/hooks/useArticle'

const ArticleDetail = () => {
  const { article, getArticle, loading } = useArticle()
  const router = useRouter()
  const { slug } = router.query
  useEffect(() => {
    slug && getArticle(slug as string)
  }, [])
  return (
    <div>
      {loading || article == null ? (
        <div>ローディング</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>title</th>
              <th>slug</th>
              <th>body</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{article.title}</td>
              <td>{article.title}</td>
              <td>{article.title}</td>
              <td>{article.title}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

export default ArticleDetail
