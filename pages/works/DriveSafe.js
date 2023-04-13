import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        DriveSafe 
      </Title>
      <P>
      Driver sleep detection and alerting system with python and opencv
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/Sharukhi/driver_sleep_detection/">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/work1.jpg" alt="DriveSafe" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'