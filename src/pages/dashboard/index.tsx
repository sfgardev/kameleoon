import { Container } from '../../shared/ui/container'
import { Title } from '../../shared/ui/title'
import { Layout } from '../../shared/ui/layout'
import { SearchInput } from '../../features/search-input'
import { Table } from '../../widgets/table'
import s from './dashboard.module.scss'

const Dashboard = () => {
  return (
    <Layout>
      <Container>
        <Title className={s.title}>Dashboard</Title>
        <SearchInput
          placeholder="What test are you looking for?"
          resultsCount={2}
        />
        <Table className={s.table} />
      </Container>
    </Layout>
  )
}

export default Dashboard
