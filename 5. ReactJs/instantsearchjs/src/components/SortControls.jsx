export default function SortControls({ count, sortBy, perPage, onSortChange, onPerPageChange, onOpenFilters }) {
  return (
    <div className="container-options">
      <button className="mobile-filter-button filters-button" type="button" onClick={onOpenFilters}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="4" y1="21" x2="4" y2="14" />
          <line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" />
          <line x1="20" y1="12" x2="20" y2="3" />
          <line x1="1" y1="14" x2="7" y2="14" />
          <line x1="9" y1="8" x2="15" y2="8" />
          <line x1="17" y1="16" x2="23" y2="16" />
        </svg>
        Filters
      </button>
      <div className="container-option ais-SortBy">
        <select className="ais-SortBy-select" value={sortBy} onChange={(event) => onSortChange(event.target.value)}>
          <option value="featured">Sort by featured</option>
          <option value="price-asc">Price ascending</option>
          <option value="price-desc">Price descending</option>
          <option value="rating">Sort by rating</option>
          <option value="name">Sort by name</option>
        </select>
      </div>
      <div className="container-option ais-HitsPerPage">
        <select className="ais-HitsPerPage-select" value={perPage} onChange={(event) => onPerPageChange(Number(event.target.value))}>
          <option value="8">8 hits per page</option>
          <option value="12">12 hits per page</option>
          <option value="16">16 hits per page</option>
        </select>
      </div>
    </div>
  )
}
