import { Container } from '../../shared/ui/container'
import { Title } from '../../shared/ui/title'
import { Layout } from '../../shared/ui/layout'
import s from './dashboard.module.scss'
import { TableWithSearch } from '../../widgets/table-with-search'

const Dashboard = () => {
  return (
    <Layout>
      <Container>
        <Title className={s.title}>Dashboard</Title>
        <TableWithSearch />
      </Container>
    </Layout>
  )
}

export default Dashboard
