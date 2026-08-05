import { AlertCircle, PackageOpen, RotateCcw } from 'lucide-react'

export function LoadingState() {
  return (
    <div className="product-grid" aria-label="Loading products" aria-busy="true">
      {Array.from({ length: 8 }, (_, index) => (
        <div className="skeleton-card" key={index}>
          <div className="skeleton skeleton-image" />
          <div className="skeleton skeleton-short" />
          <div className="skeleton skeleton-title" />
          <div className="skeleton skeleton-line" />
          <div className="skeleton skeleton-line" />
        </div>
      ))}
      <span className="sr-only">Loading products...</span>
    </div>
  )
}

export function ErrorState({ onRetry }) {
  return (
    <div className="state-panel" role="alert">
      <AlertCircle size={34} />
      <h2>Unable to load products.</h2>
      <p>Make sure JSON Server is running.</p>
      <button className="primary-button" type="button" onClick={onRetry}>
        <RotateCcw size={17} />
        Try again
      </button>
    </div>
  )
}

export function EmptyState({ onClear }) {
  return (
    <div className="state-panel">
      <PackageOpen size={36} />
      <h2>No products matched your search.</h2>
      <p>Try another keyword or remove some filters.</p>
      <button className="primary-button" type="button" onClick={onClear}>
        Clear filters
      </button>
    </div>
  )
}
