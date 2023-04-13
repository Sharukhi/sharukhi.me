import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import work1 from '../public/images/works/work1.jpg'
import work2 from '../public/images/works/work2.jpg'
import work3 from '../public/images/works/work3.jpeg'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="DriveSafe" title="DriveSafe" thumbnail={work1}>
          Driver sleep detection and alerting system with python
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="oab" title="Object Avoiding Robot" thumbnail={work2}>
          Object Avoiding Robot using Arduino
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="MakeQRC" title="MakeQRC" thumbnail={work3}>
          A web app to generate QR codes from text or URL.
          </WorkGridItem>
        </Section>


      </SimpleGrid>


    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
