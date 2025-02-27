import { SearchInput } from '../../features/search-input'
import { Table } from '../../features/table'
import s from './table-with-search.module.scss'
import { useSites } from './useSites.ts'

export const TableWithSearch = () => {
  const { sites } = useSites()

  return (
    <div className={s.tableWithSearch}>
      <SearchInput resultsCount={2} />
      <Table sites={sites} />
    </div>
  )
}
