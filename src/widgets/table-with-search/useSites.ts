import { useEffect, useState } from 'react'
import { TestModel, testsApi } from '../../entities/test'
import { SiteModel, sitesApi } from '../../entities/site'

export const useSites = () => {
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

  return { sites }
}
