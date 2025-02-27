import { SearchInput } from '../../features/search-input'
import { Table } from '../../features/table'
import s from './table-with-search.module.scss'
import { useSites } from './useSites.ts'
import { useState } from 'react'
import { NoResults } from './no-results.tsx'
import { Sort } from '../../shared/model'
import { TestModelStatus } from '../../entities/test'

export const TableWithSearch = () => {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<Sort | null>(null)
  const { sites } = useSites()

  const filteredSitesByName = sites.filter((site) =>
    site.name.toLowerCase().includes(search.toLowerCase())
  )

  const sortedSites = [...filteredSitesByName].sort((a, b) => {
    switch (sort?.sortBy) {
      case 'name':
        return sort.direction === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      case 'site':
        return sort.direction === 'asc'
          ? a.url.localeCompare(b.url)
          : b.url.localeCompare(a.url)

      case 'type':
        return sort.direction === 'asc'
          ? a.type.localeCompare(b.type)
          : b.type.localeCompare(a.type)
      case 'status': {
        // const statusOrderAsc = ['Online', 'Paused', 'Stopped', 'Draft']
        const statusOrderAsc = [
          TestModelStatus.ONLINE,
          TestModelStatus.PAUSED,
          TestModelStatus.STOPPED,
          TestModelStatus.DRAFT,
        ]
        const statusOrderDesc = [...statusOrderAsc].reverse()

        const order =
          sort.direction === 'asc' ? statusOrderAsc : statusOrderDesc
        return order.indexOf(a.status) - order.indexOf(b.status)
      }
      default:
        return 0
    }
  })

  const handleResetSearch = () => {
    setSearch('')
  }

  const handleSort = (sortBy: Sort['sortBy']) => {
    setSort((prev) => {
      if (!prev || prev.sortBy !== sortBy) {
        return { direction: 'asc', sortBy }
      }

      if (prev.direction === 'desc') {
        return null
      }

      return { direction: 'desc', sortBy }
    })
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
        <Table sites={sortedSites} sort={sort} onSort={handleSort} />
      )}
    </div>
  )
}
