import { SearchInput } from '../../features/search-input'
import { Table } from '../../features/table'
import s from './table-with-search.module.scss'
import { useSites } from './useSites.ts'
import { useState } from 'react'
import { NoResults } from './no-results.tsx'

export const TableWithSearch = () => {
  const [search, setSearch] = useState('')
  const { sites } = useSites()

  const filteredSitesByName = sites.filter((site) =>
    site.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleResetSearch = () => {
    setSearch('')
  }

  return (
    <div className={s.tableWithSearch}>
      <SearchInput
        resultsCount={filteredSitesByName.length}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {filteredSitesByName.length === 0 ? (
        <NoResults onReset={handleResetSearch} />
      ) : (
        <Table sites={filteredSitesByName} />
      )}
    </div>
  )
}
