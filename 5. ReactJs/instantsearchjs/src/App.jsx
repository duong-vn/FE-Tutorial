import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import FilterDrawer from './components/FilterDrawer'
import FilterSidebar from './components/FilterSidebar'
import Header from './components/Header'
import Pagination from './components/Pagination'
import ProductGrid from './components/ProductGrid'
import SortControls from './components/SortControls'
import { EmptyState, ErrorState, LoadingState } from './components/States'
import { useProducts } from './hooks/useProducts'
import { countBy, DEFAULT_FILTERS, filterProducts, sortProducts } from './utils/filterProducts'
import { readQueryParams, writeQueryParams } from './utils/queryParams'

const initialUrlState = readQueryParams()

export default function App() {
  const { products, loading, error, retry } = useProducts()
  const [filters, setFilters] = useState(initialUrlState.filters)
  const [debouncedQuery, setDebouncedQuery] = useState(initialUrlState.filters.query)
  const [sortBy, setSortBy] = useState('featured')
  const [perPage, setPerPage] = useState(12)
  const [page, setPage] = useState(initialUrlState.page)
  const [brandSearch, setBrandSearch] = useState('')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const resultsRef = useRef(null)

  useEffect(() => {
    const timeout = window.setTimeout(() => setDebouncedQuery(filters.query), 300)
    return () => window.clearTimeout(timeout)
  }, [filters.query])

  useEffect(() => {
    writeQueryParams(filters, page)
  }, [filters, page])

  useEffect(() => {
    document.body.classList.toggle('drawer-open', drawerOpen)
    return () => document.body.classList.remove('drawer-open')
  }, [drawerOpen])

  const activeFilters = useMemo(() => ({ ...filters, query: debouncedQuery }), [filters, debouncedQuery])
  const filteredProducts = useMemo(() => filterProducts(products, activeFilters), [products, activeFilters])
  const sortedProducts = useMemo(() => sortProducts(filteredProducts, sortBy), [filteredProducts, sortBy])
  const categoryCounts = useMemo(() => countBy(products, 'category'), [products])
  const brandCounts = useMemo(() => countBy(products, 'brand'), [products])
  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / perPage))
  const safePage = Math.min(page, totalPages)
  const currentProducts = useMemo(
    () => sortedProducts.slice((safePage - 1) * perPage, safePage * perPage),
    [sortedProducts, safePage, perPage],
  )

  useEffect(() => {
    if (!loading && page > totalPages) setPage(totalPages)
  }, [loading, page, totalPages])

  const updateFilter = useCallback((key, value) => {
    setFilters((current) => ({ ...current, [key]: value }))
    setPage(1)
  }, [])

  const toggleListFilter = useCallback((key, value) => {
    setFilters((current) => ({
      ...current,
      [key]: current[key].includes(value)
        ? current[key].filter((item) => item !== value)
        : [...current[key], value],
    }))
    setPage(1)
  }, [])

  const clearFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS)
    setDebouncedQuery('')
    setBrandSearch('')
    setPage(1)
  }, [])

  const changePage = (nextPage) => {
    setPage(nextPage)
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const filterProps = {
    filters,
    categoryCounts,
    brandCounts,
    brandSearch,
    onBrandSearchChange: setBrandSearch,
    onToggleList: toggleListFilter,
    onFilterChange: updateFilter,
    onClear: clearFilters,
  }

  return (
    <>
      {/*
        THESIS: Search behaves like a stage lighting desk: broad dark header, crisp white work surface, cobalt active cues; refuses catalog clutter.
        OWN-WORLD: Midnight navy, cobalt controls, coral status marks, white cards, thin technical rules, compact utility typography.
        STORY: Search first, narrow with visible controls, compare consistent products, move through pages without losing URL state.
        FIRST VIEWPORT: Brand and large search field fill dark header; desktop filters anchor left while result controls and product grid start right.
        FORM: Operate surface; grounded direction 4; seed 981d4bd5.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
      */}
      <Header query={filters.query} onQueryChange={(value) => updateFilter('query', value)} />

      <main className="container" ref={resultsRef}>
        <div className="desktop-sidebar">
          <FilterSidebar {...filterProps} />
        </div>

        <section className="container-results" aria-labelledby="results-title">
          <h1 id="results-title" className="sr-only">
            Product search results
          </h1>
          <SortControls
            count={filteredProducts.length}
            sortBy={sortBy}
            perPage={perPage}
            onSortChange={(value) => {
              setSortBy(value)
              setPage(1)
            }}
            onPerPageChange={(value) => {
              setPerPage(value)
              setPage(1)
            }}
            onOpenFilters={() => setDrawerOpen(true)}
          />

          {loading && <LoadingState />}
          {error && !loading && <ErrorState onRetry={retry} />}
          {!loading && !error && !filteredProducts.length && <EmptyState onClear={clearFilters} />}
          {!loading && !error && filteredProducts.length > 0 && (
            <>
              <ProductGrid products={currentProducts} query={debouncedQuery} />
              <Pagination currentPage={safePage} totalPages={totalPages} onPageChange={changePage} />
            </>
          )}
        </section>
      </main>

      <FilterDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        resultCount={filteredProducts.length}
        {...filterProps}
      />
    </>
  )
}
