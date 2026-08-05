import { useCallback, useEffect, useState } from 'react'

const PRODUCTS_URL = 'http://localhost:3001/products'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [requestKey, setRequestKey] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function loadProducts() {
      setLoading(true)
      setError(false)

      try {
        const response = await fetch(PRODUCTS_URL, { signal: controller.signal })
        if (!response.ok) throw new Error(`Request failed: ${response.status}`)
        setProducts(await response.json())
      } catch (requestError) {
        if (requestError.name !== 'AbortError') setError(true)
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    loadProducts()
    return () => controller.abort()
  }, [requestKey])

  const retry = useCallback(() => setRequestKey((key) => key + 1), [])

  return { products, loading, error, retry }
}
