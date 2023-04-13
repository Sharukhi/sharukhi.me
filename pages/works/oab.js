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
      Object Avoiding Robot 
      </Title>
      <P>
      Object Avoiding Robot using Arduino
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href="https://github.com/Sharukhi/Obstacle-avoiding-robot">
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/work2.jpg" alt="Object Avoiding Robot" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'