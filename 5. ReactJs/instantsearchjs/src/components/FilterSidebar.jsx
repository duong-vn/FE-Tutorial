import { useState } from 'react'

const PREFERRED_CATEGORIES = [
  'Appliances',
  'Audio',
  'Cameras & Camcorders',
  'Car Electronics & GPS',
  'Cell Phones',
  'Computers & Tablets',
  'Health, Fitness & Beauty',
  'Office & School Supplies',
  'TV & Home Theater',
  'Video Games',
]

const PREFERRED_BRANDS = [
  'Apple',
  'Insignia™',
  'Metra',
  'HP',
  'Samsung',
  'Sony',
  'Incipio',
  'Canon',
  'Speck',
  'OtterBox',
  'Logitech',
  'Dell',
]

export default function FilterSidebar({
  filters,
  categoryCounts,
  brandCounts,
  brandSearch,
  onBrandSearchChange,
  onToggleList,
  onFilterChange,
  onClear,
  mobile = false,
}) {
  const categories = Object.keys(categoryCounts).length > 0
    ? Object.keys(categoryCounts)
    : PREFERRED_CATEGORIES

  const brands = (Object.keys(brandCounts).length > 0 ? Object.keys(brandCounts) : PREFERRED_BRANDS).filter(
    (brand) => brand.toLowerCase().includes(brandSearch.toLowerCase())
  )

  return (
    <aside className={mobile ? 'container-filters mobile' : 'container-filters'} aria-label="Product filters">
      <div className="container-header">
        <h2>Filters</h2>
        <button className="clear-filters ais-ClearRefinements-button" type="button" onClick={onClear}>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M0 5.5a5.5 5.5 0 1 1 9.39 3.89l.84.84a.5.5 0 0 1-.7.7l-1.84-1.84a.5.5 0 0 1 0-.7L9.53 6.55a.5.5 0 0 1 .7.7l-.84.84A4.5 4.5 0 1 0 1 5.5a.5.5 0 0 1-1 0z"
            />
          </svg>
          Clear filters
        </button>
      </div>

      <div className="container-body">
        {/* CATEGORY SECTION */}
        <section className="ais-Panel">
          <div className="ais-Panel-header">Category</div>
          <div className="ais-Panel-body">
            <div className="ais-HierarchicalMenu">
              <ul className="ais-HierarchicalMenu-list">
                {categories.map((category) => {
                  const isSelected = filters.categories.includes(category)
                  const count = categoryCounts[category] || 0
                  return (
                    <li
                      key={category}
                      className={`ais-HierarchicalMenu-item ${isSelected ? 'ais-HierarchicalMenu-item--selected' : ''}`}
                    >
                      <a
                        className="ais-HierarchicalMenu-link"
                        href="#root"
                        onClick={(e) => {
                          e.preventDefault()
                          onToggleList('categories', category)
                        }}
                      >
                        <span className="ais-HierarchicalMenu-label">{category}</span>
                        {count > 0 && <span className="ais-HierarchicalMenu-count">{count}</span>}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* BRANDS SECTION */}
        <section className="ais-Panel">
          <div className="ais-Panel-header">Brands</div>
          <div className="ais-Panel-body">
            <div className="ais-RefinementList">
              <div className="ais-SearchBox">
                <form className="ais-SearchBox-form" action="" role="search" onSubmit={(e) => e.preventDefault()}>
                  <input
                    className="ais-SearchBox-input"
                    type="search"
                    placeholder="Search for brands..."
                    value={brandSearch}
                    onChange={(e) => onBrandSearchChange(e.target.value)}
                    autoComplete="off"
                  />
                </form>
              </div>
              <ul className="ais-RefinementList-list">
                {brands.map((brand) => {
                  const isSelected = filters.brands.includes(brand)
                  const count = brandCounts[brand] || 0
                  return (
                    <li
                      key={brand}
                      className={`ais-RefinementList-item ${isSelected ? 'ais-RefinementList-item--selected' : ''}`}
                    >
                      <label className="ais-RefinementList-label" onClick={() => onToggleList('brands', brand)}>
                        <input
                          className="ais-RefinementList-checkbox"
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => {}}
                        />
                        <span className="ais-RefinementList-labelText">{brand}</span>
                        {count > 0 && <span className="ais-RefinementList-count">{count}</span>}
                      </label>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* PRICE SECTION */}
        <section className="ais-Panel">
          <div className="ais-Panel-header">Price</div>
          <div className="ais-Panel-body">
            <div className="ais-RangeInput">
              <form className="ais-RangeInput-form" onSubmit={(e) => e.preventDefault()}>
                <label className="ais-RangeInput-label">
                  <span className="ais-RangeInput-currency">$</span>
                  <input
                    className="ais-RangeInput-input"
                    type="number"
                    min="0"
                    placeholder="1"
                    value={filters.minimumPrice}
                    onChange={(e) => onFilterChange('minimumPrice', e.target.value)}
                  />
                </label>
                <span className="ais-RangeInput-separator">to</span>
                <label className="ais-RangeInput-label">
                  <span className="ais-RangeInput-currency">$</span>
                  <input
                    className="ais-RangeInput-input"
                    type="number"
                    min="0"
                    placeholder="4800"
                    value={filters.maximumPrice}
                    onChange={(e) => onFilterChange('maximumPrice', e.target.value)}
                  />
                </label>
              </form>
            </div>
          </div>
        </section>

        {/* FREE SHIPPING SECTION */}
        <section className="ais-Panel">
          <div className="ais-Panel-header">Free shipping</div>
          <div className="ais-Panel-body">
            <div className="ais-ToggleRefinement">
              <label className="ais-ToggleRefinement-label">
                <input
                  className="ais-ToggleRefinement-checkbox"
                  type="checkbox"
                  checked={filters.freeShipping}
                  onChange={(e) => onFilterChange('freeShipping', e.target.checked)}
                />
                <span className="ais-ToggleRefinement-labelText">Display only items with free shipping</span>
              </label>
            </div>
          </div>
        </section>

        {/* RATINGS SECTION */}
        <section className="ais-Panel">
          <div className="ais-Panel-header">Ratings</div>
          <div className="ais-Panel-body">
            <div className="ais-RatingMenu">
              <ul className="ais-RatingMenu-list">
                {[4, 3, 2, 1].map((rating) => {
                  const isSelected = filters.minimumRating === rating
                  return (
                    <li
                      key={rating}
                      className={`ais-RatingMenu-item ${isSelected ? 'ais-RatingMenu-item--selected' : ''}`}
                    >
                      <a
                        className="ais-RatingMenu-link"
                        href="#root"
                        onClick={(e) => {
                          e.preventDefault()
                          onFilterChange('minimumRating', isSelected ? 0 : rating)
                        }}
                      >
                        {Array.from({ length: 5 }, (_, i) => (
                          <svg
                            key={i}
                            className={`ais-RatingMenu-starIcon ${i < rating ? 'ais-RatingMenu-starIcon--full' : 'ais-RatingMenu-starIcon--empty'}`}
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0l2.472 5.008 5.528.804-4 3.9 1.18 5.508L8 12.62 3.02 15.22 4.2 9.712l-4-3.9 5.528-.804z" />
                          </svg>
                        ))}
                        <span className="ais-RatingMenu-label">&amp; Up</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </aside>
  )
}
