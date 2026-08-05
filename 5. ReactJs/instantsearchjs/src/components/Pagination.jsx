

function visiblePages(currentPage, totalPages) {
  const start = Math.max(1, Math.min(currentPage - 2, totalPages - 4))
  const end = Math.min(totalPages, Math.max(currentPage + 2, 5))
  return Array.from({ length: end - start + 1 }, (_, index) => start + index)
}

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  return (
    <nav className="container-footer ais-Pagination" aria-label="Product pages">
      <ul className="ais-Pagination-list">
        <li className={`ais-Pagination-item ais-Pagination-item--previousPage ${currentPage === 1 ? 'ais-Pagination-item--disabled' : ''}`}>
          <button
            className="ais-Pagination-link"
            type="button"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            ‹
          </button>
        </li>
        {visiblePages(currentPage, totalPages).map((page) => (
          <li
            key={page}
            className={`ais-Pagination-item ais-Pagination-item--page ${page === currentPage ? 'ais-Pagination-item--selected' : ''}`}
          >
            <button
              className="ais-Pagination-link"
              type="button"
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? 'page' : undefined}
              aria-label={`Page ${page}`}
            >
              {page}
            </button>
          </li>
        ))}
        <li className={`ais-Pagination-item ais-Pagination-item--nextPage ${currentPage === totalPages ? 'ais-Pagination-item--disabled' : ''}`}>
          <button
            className="ais-Pagination-link"
            type="button"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            ›
          </button>
        </li>
      </ul>
    </nav>
  )
}
