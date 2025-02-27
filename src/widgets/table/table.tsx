import { ComponentPropsWithoutRef, useEffect, useState } from 'react'
import s from './table.module.scss'
import { SiteModel, sitesApi } from '../../entities/site'
import { TestModel, testsApi } from '../../entities/test'
import { TableRow } from './table-row.tsx'

type Props = {} & ComponentPropsWithoutRef<'table'>

export const Table = ({ ...props }: Props) => {
  const [sites, setSites] = useState<
    Array<TestModel & { url: SiteModel['url'] }>
  >([])

  useEffect(() => {
    ;(async () => {
      try {
        const [sitesResponse, testsResponse] = await Promise.all([
          sitesApi.getAll(),
          testsApi.getAll(),
        ])

        const urlBySiteIdDict = sitesResponse.data.reduce<
          Record<number, SiteModel['url']>
        >((dict, site) => {
          dict[site.id] = site.url
          return dict
        }, {})

        setSites(
          testsResponse.data.map((test) => ({
            ...test,

            url: urlBySiteIdDict[test.siteId],
          }))
        )
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <table className={s.table} {...props}>
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
