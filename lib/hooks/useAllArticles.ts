import axios from 'axios';
import { useState, useCallback } from 'react';
import { Article } from '../types/article';

type ArticlesResponse = {
  articles: Array<Article>
}
export const useAllArticles = () => {
  // SWR使って書き直した方がいいかもしれない。
  const [loading, setLoading] = useState(false)

  const [articles, setArticles] = useState<Array<Article>>([])
  const getArticles = useCallback( async () => {
    setLoading(true)
    try {
      const res = await axios.get<ArticlesResponse>("https://conduit.productionready.io/api/articles?limit=10&offset=0")
      setArticles(res.data.articles)
      setLoading(false)
    } catch (err) {
      alert("エラーです")
      setLoading(false)
    }
    
  }, [])
  return { getArticles, articles, loading }
}