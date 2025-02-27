export type TestModel = {
  id: number
  name: string
  type: TestModelType
  status: TestModelStatus
  siteId: number
}

export enum TestModelType {
  CLASSIC = 'CLASSIC',
  SERVER_SIDE = 'SERVER_SIDE',
  MVT = 'MVT',
}

export enum TestModelStatus {
  DRAFT = 'DRAFT',
  ONLINE = 'ONLINE',
  PAUSED = 'PAUSED',
  STOPPED = 'STOPPED',
}
