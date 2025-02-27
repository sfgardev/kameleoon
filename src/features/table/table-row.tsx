import { Button } from '../../shared/ui/button'
import { TestModelStatus, TestModelType } from '../../entities/test'
import s from './table.module.scss'
import { memo } from 'react'
import { ROUTES } from '../../shared/lib'

type Props = {
  id: number
  name: string
  type: TestModelType
  status: TestModelStatus
  url: string
}

const colors = ['#E14165', '#C2C2FF', '#8686FF']

const getRandomColor = (colors: string[]) => {
  return colors[Math.floor(Math.random() * colors.length)]
}

const getColorByStatus = (status: TestModelStatus) => {
  const colors = {
    [TestModelStatus.DRAFT]: '#5C5C5C',
    [TestModelStatus.ONLINE]: '#1BDA9D',
    [TestModelStatus.PAUSED]: '#FF8346',
    [TestModelStatus.STOPPED]: '#FE4848',
  }
  return colors[status]
}

export const TableRow = memo(({ id, name, type, status, url }: Props) => {
  return (
    <tr>
      <td>
        <span
          className={s.rightBorder}
          style={{ backgroundColor: getRandomColor(colors) }}
        ></span>
        {name}
      </td>
      <td>{type}</td>
      <td style={{ color: getColorByStatus(status) }}>{status}</td>
      <td>{url}</td>
      <td>
        {status === TestModelStatus.DRAFT ? (
          <Button to={ROUTES.finalize(id)} variant="secondary">
            Finalize
          </Button>
        ) : (
          <Button to={ROUTES.results(id)}>Results</Button>
        )}
      </td>
    </tr>
  )
})
