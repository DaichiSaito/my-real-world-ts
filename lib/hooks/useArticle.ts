import { Article } from '../types/article';
import { useState, useCallback } from 'react';
import axios from 'axios';
type ArticleResponse = {
  article: Article
}
export const useArticle = () => {
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(false)
  const getArticle = useCallback((slug: string) => {
    setLoading(true)
    axios.get<ArticleResponse>(`https://conduit.productionready.io/api/articles/${slug}`).then(res => {
      setArticle(res.data.article)
      setLoading(false)
      }).catch(err => {
        setLoading(false)  
      })
  }, [])

  return { article, loading, getArticle }
}