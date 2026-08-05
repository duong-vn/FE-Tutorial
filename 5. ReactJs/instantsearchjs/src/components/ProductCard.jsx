function HighlightedName({ name, query }) {
  const normalizedQuery = query.trim()
  if (!normalizedQuery) return name

  const index = name.toLowerCase().indexOf(normalizedQuery.toLowerCase())
  if (index === -1) return name

  return (
    <>
      {name.slice(0, index)}
      <mark>{name.slice(index, index + normalizedQuery.length)}</mark>
      {name.slice(index + normalizedQuery.length)}
    </>
  )
}

export default function ProductCard({ product, query }) {
  return (
    <article className="hit">
      <div className="hit-image-container">
        <img className="hit-image" src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="hit-info-container">
        <div className="hit-category">{product.category}</div>
        <h1>
          <HighlightedName name={product.name} query={query} />
        </h1>
        <div className="hit-description">{product.description}</div>
        <div className="hit-price-rating">
          <span className="hit-em">$ {product.price}</span>
          <span className="hit-rating">
            <svg width="10" height="10" viewBox="0 0 16 16" fill="#e2a400">
              <path d="M8 0l2.472 5.008 5.528.804-4 3.9 1.18 5.508L8 12.62 3.02 15.22 4.2 9.712l-4-3.9 5.528-.804z" />
            </svg>
            {product.rating}
          </span>
        </div>
      </div>
    </article>
  )
}
