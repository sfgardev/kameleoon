import { ComponentPropsWithoutRef } from 'react'
import s from './table.module.scss'
import { SiteModel } from '../../entities/site'
import { TestModel } from '../../entities/test'
import { TableRow } from './table-row.tsx'
import cn from 'classnames'

type Props = {
  sites: Array<TestModel & { url: SiteModel['url'] }>
} & ComponentPropsWithoutRef<'table'>

export const Table = ({ className, sites, ...props }: Props) => {
  return (
    <table className={cn(s.table, className)} {...props}>
      <thead>
        <tr>
          <th style={{ width: '400px' }}>Name</th>
          <th style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <span>Type</span>
            <svg
              width="7"
              height="4"
              viewBox="0 0 7 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 3.50001L3.13529 0.364716L3.5 7.15256e-06L3.86471 0.364716L7 3.50001L6.63529 3.86472L3.5 0.729424L0.364708 3.86472L0 3.50001Z"
                fill="#999999"
              />
            </svg>
          </th>
          <th>Status</th>
          <th>Site</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {sites.map((site) => (
          <TableRow key={site.id} site={site} />
        ))}
      </tbody>
    </table>
  )
}
