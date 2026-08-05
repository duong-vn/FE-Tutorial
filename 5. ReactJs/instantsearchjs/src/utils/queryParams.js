import { DEFAULT_FILTERS } from './filterProducts'

const parseList = (value) => (value ? value.split(',').filter(Boolean) : [])

export function readQueryParams() {
  const params = new URLSearchParams(window.location.search)
  const page = Number.parseInt(params.get('page'), 10)

  return {
    filters: {
      ...DEFAULT_FILTERS,
      query: params.get('q') || '',
      categories: parseList(params.get('category')),
      brands: parseList(params.get('brand')),
      freeShipping: params.get('free_shipping') === 'true',
    },
    page: Number.isInteger(page) && page > 0 ? page : 1,
  }
}

export function writeQueryParams(filters, page) {
  const params = new URLSearchParams()

  if (filters.query.trim()) params.set('q', filters.query.trim())
  if (filters.freeShipping) params.set('free_shipping', 'true')
  if (filters.categories.length) params.set('category', filters.categories.join(','))
  if (filters.brands.length) params.set('brand', filters.brands.join(','))
  if (page > 1) params.set('page', String(page))

  const search = params.toString()
  window.history.replaceState(null, '', `${window.location.pathname}${search ? `?${search}` : ''}`)
}
