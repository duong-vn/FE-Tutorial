export const DEFAULT_FILTERS = {
  query: '',
  categories: [],
  brands: [],
  minimumPrice: '',
  maximumPrice: '',
  freeShipping: false,
  minimumRating: 0,
}

export function filterProducts(products, filters) {
  const query = filters.query.trim().toLocaleLowerCase()
  const minimumPrice = filters.minimumPrice === '' ? -Infinity : Number(filters.minimumPrice)
  const maximumPrice = filters.maximumPrice === '' ? Infinity : Number(filters.maximumPrice)

  return products.filter((product) => {
    const searchableText = [product.name, product.brand, product.category, product.description]
      .join(' ')
      .toLocaleLowerCase()

    return (
      (!query || searchableText.includes(query)) &&
      (!filters.categories.length || filters.categories.includes(product.category)) &&
      (!filters.brands.length || filters.brands.includes(product.brand)) &&
      product.price >= minimumPrice &&
      product.price <= maximumPrice &&
      (!filters.freeShipping || product.freeShipping) &&
      product.rating >= filters.minimumRating
    )
  })
}

export function sortProducts(products, sortBy) {
  return [...products].sort((left, right) => {
    if (sortBy === 'price-asc') return left.price - right.price
    if (sortBy === 'price-desc') return right.price - left.price
    if (sortBy === 'rating') return right.rating - left.rating
    if (sortBy === 'name') return left.name.localeCompare(right.name)
    return left.featuredRank - right.featuredRank
  })
}

export function countBy(products, key) {
  return products.reduce((counts, product) => {
    counts[product[key]] = (counts[product[key]] || 0) + 1
    return counts
  }, {})
}
