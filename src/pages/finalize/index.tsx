import { useParams } from 'react-router'
import { useTestById } from '../../entities/test'
import { Layout } from '../../shared/ui/layout'
import { Container } from '../../shared/ui/container'
import { Title } from '../../shared/ui/title'
import { Subtitle } from '../../shared/ui/subtitle'

const Finalize = () => {
  const { testId } = useParams()
  const { testName } = useTestById(testId)

  return (
    <Layout>
      <Container>
        <Title>Finalize</Title>
        <Subtitle>{testName}</Subtitle>
      </Container>
    </Layout>
  )
}

export default Finalize
