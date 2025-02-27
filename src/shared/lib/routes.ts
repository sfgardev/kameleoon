export const ROUTES = {
  root: '/',
  dashboard: '/dashboard',
  results: (id?: number) => (id ? `/results/${id}` : '/results/:testId'),
  finalize: (id?: number) => (id ? `/finalize/${id}` : '/finalize/:testId'),
} as const
