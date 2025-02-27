import { api } from '../../../shared/api'
import { SiteModel } from '../model/types.ts'

export const sitesApi = {
  getAll: () => api.get<SiteModel[]>('/sites'),
  getById: (id: number) => api.get<SiteModel>(`/sites/${id}`),
}
