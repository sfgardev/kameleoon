import { ComponentPropsWithoutRef } from 'react'
import s from './table.module.scss'
import { SiteModel } from '../../entities/site'
import { TestModel } from '../../entities/test'
import { TableRow } from './table-row.tsx'
import { Chevron } from './chevron'
import { Sort } from '../../shared/model'
import cn from 'classnames'

type Props = {
  sites: Array<TestModel & { url: SiteModel['url'] }>
  sort: Sort | null
  onSort: (sortBy: Sort['sortBy']) => void
} & ComponentPropsWithoutRef<'table'>

const getChevronDirection = (direction: Sort['direction']) => {
  return direction === 'asc' ? 'up' : 'down'
}

export const Table = ({ className, sites, sort, onSort, ...props }: Props) => {
  const chevronDirection = getChevronDirection(sort?.direction ?? 'asc')

  return (
    <table className={cn(s.table, className)} {...props}>
      <thead>
        <tr>
          <th style={{ width: '400px' }} onClick={() => onSort('name')}>
            <div className={s.sortCol}>
              <span>Name</span>
              {sort?.sortBy === 'name' && (
                <Chevron direction={chevronDirection} />
              )}
            </div>
          </th>
          <th onClick={() => onSort('type')}>
            <div className={s.sortCol}>
              <span>Type</span>
              {sort?.sortBy === 'type' && (
                <Chevron direction={chevronDirection} />
              )}
            </div>
          </th>
          <th onClick={() => onSort('status')}>
            <div className={s.sortCol}>
              <span>Status</span>
              {sort?.sortBy === 'status' && (
                <Chevron direction={chevronDirection} />
              )}
            </div>
          </th>
          <th onClick={() => onSort('site')}>
            <div className={s.sortCol}>
              <span>Site</span>
              {sort?.sortBy === 'site' && (
                <Chevron direction={chevronDirection} />
              )}
            </div>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {sites.map((site) => (
          <TableRow key={site.id} {...site} />
        ))}
      </tbody>
    </table>
  )
}
