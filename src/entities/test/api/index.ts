import { api } from '../../../shared/api'
import { TestModel } from '../model/types.ts'

export const testsApi = {
  getAll: () => api.get<TestModel[]>('/tests'),
  getById: (id: number) => api.get<TestModel>(`/tests/${id}`),
}
