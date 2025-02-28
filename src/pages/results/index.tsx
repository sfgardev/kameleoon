import { useNavigate, useParams } from 'react-router'
import { useTestById } from '../../entities/test'
import { Layout } from '../../shared/ui/layout'
import { Container } from '../../shared/ui/container'
import { Title } from '../../shared/ui/title'
import { Subtitle } from '../../shared/ui/subtitle'
import { GoBackButton } from '../../shared/ui/go-back-button'
import s from './results.module.scss'

const Results = () => {
  const { testId } = useParams()
  const navigate = useNavigate()
  const { testName } = useTestById(testId)

  return (
    <Layout>
      <Container className={s.container}>
        <Title>Results</Title>
        <Subtitle>{testName}</Subtitle>
        <GoBackButton onClick={() => navigate(-1)} className={s.goBackButton} />
      </Container>
    </Layout>
  )
}

export default Results
