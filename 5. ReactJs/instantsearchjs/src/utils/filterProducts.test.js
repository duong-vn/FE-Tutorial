import { strict as assert } from 'node:assert'
import { filterProducts, sortProducts } from './filterProducts.js'

const products = [
  { name: 'Alpha Camera', brand: 'Canon', category: 'Cameras', description: 'Mirrorless', price: 900, rating: 4.5, freeShipping: true, featuredRank: 2 },
  { name: 'Beta Camera', brand: 'Sony', category: 'Cameras', description: 'Compact', price: 600, rating: 3.5, freeShipping: false, featuredRank: 1 },
]

const result = filterProducts(products, {
  query: 'camera',
  categories: ['Cameras'],
  brands: ['Canon', 'Samsung'],
  minimumPrice: '',
  maximumPrice: '1000',
  freeShipping: true,
  minimumRating: 4,
})

assert.deepEqual(result.map((product) => product.brand), ['Canon'])
assert.deepEqual(sortProducts(products, 'price-asc').map((product) => product.price), [600, 900])
console.log('filterProducts self-check passed')
