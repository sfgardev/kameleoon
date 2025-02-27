import { Container } from '../../shared/ui/container'
import { Title } from '../../shared/ui/title'
import { Layout } from '../../shared/ui/layout'
import { SearchInput } from '../../features/search-input'

const Dashboard = () => {
  return (
    <Layout>
      <Container>
        <Title>Dashboard</Title>
        <SearchInput placeholder="What test are you looking for?" resultsCount={2} />
      </Container>
    </Layout>
  )
}

export default Dashboard
