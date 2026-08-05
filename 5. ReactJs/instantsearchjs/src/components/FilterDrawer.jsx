import { X } from 'lucide-react'
import FilterSidebar from './FilterSidebar'

export default function FilterDrawer({ open, onClose, resultCount, ...filterProps }) {
  if (!open) return null

  return (
    <div className="drawer-layer">
      <button className="drawer-backdrop" type="button" onClick={onClose} aria-label="Close filters" />
      <div className="filter-drawer" role="dialog" aria-modal="true" aria-labelledby="mobile-filter-title">
        <div className="drawer-header">
          <h2 id="mobile-filter-title">Refine results</h2>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Close filters">
            <X size={22} />
          </button>
        </div>
        <div className="drawer-scroll">
          <FilterSidebar {...filterProps} mobile />
        </div>
        <div className="drawer-actions">
          <button className="secondary-button" type="button" onClick={filterProps.onClear}>
            Clear filters
          </button>
          <button className="primary-button" type="button" onClick={onClose}>
            Show {resultCount} results
          </button>
        </div>
      </div>
    </div>
  )
}
