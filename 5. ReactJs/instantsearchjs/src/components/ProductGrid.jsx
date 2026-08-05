import ProductCard from './ProductCard'

export default function ProductGrid({ products, query }) {
  return (
    <div className="ais-Hits-list product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} query={query} />
      ))}
    </div>
  )
}
