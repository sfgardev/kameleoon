import { useEffect, useState } from 'react'
import { testsApi } from './api'

export const useTestById = (id: string | undefined) => {
  const [testName, setTestName] = useState('')

  useEffect(() => {
    if (!id) return

    const getResultById = async () => {
      try {
        const response = await testsApi.getById(Number(id))
        setTestName(response.data.name)
      } catch (error) {
        console.error(error)
      }
    }

    getResultById()
  }, [id])

  return { testName }
}
