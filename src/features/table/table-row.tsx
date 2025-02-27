import { Button } from '../../shared/ui/button'
import { TestModel, TestModelStatus } from '../../entities/test'
import { SiteModel } from '../../entities/site'
import s from './table.module.scss'

type Props = {
  site: TestModel & { url: SiteModel['url'] }
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

export const TableRow = ({ site }: Props) => {
  return (
    <tr>
      <td>
        <span
          className={s.rightBorder}
          style={{ backgroundColor: getRandomColor(colors) }}
        ></span>
        {site.name}
      </td>
      <td>{site.type}</td>
      <td style={{ color: getColorByStatus(site.status) }}>{site.status}</td>
      <td>{site.url}</td>
      <td>
        {site.status === TestModelStatus.DRAFT ? (
          <Button variant="secondary">Finalize</Button>
        ) : (
          <Button>Results</Button>
        )}
      </td>
    </tr>
  )
}
