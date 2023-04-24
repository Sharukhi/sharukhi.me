import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridStyle } from '../components/photos-grid'

import pic from '../public/photos/1.jpg'
import pic1 from '../public/photos/2.jpg'
import pic2 from '../public/photos/3.png'
import pic3 from '../public/photos/4.jpg'
import pic4  from '../public/photos/5.jpg'
import pic5 from '../public/photos/6.png'
import pic6  from '../public/photos/7.png'
import pic7 from '../public/photos/8.jpg'




const Works = () => (
  <Layout title="Photos">
    <Container>
      <Heading as="h2" fontSize={20} mb={4}>
        Photos
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <GridStyle thumbnail={pic} >
          </GridStyle>
        </Section>
        <Section>
          <GridStyle thumbnail={pic1}>
          </GridStyle>
        </Section>
        <Section>
          <GridStyle thumbnail={pic2}>
          </GridStyle>
        </Section>
        <Section>
          <GridStyle thumbnail={pic3}>
          </GridStyle>
        </Section>
        <Section>
          <GridStyle thumbnail={pic4}>
          </GridStyle>
        </Section>
        <Section>
          <GridStyle thumbnail={pic5}>
          </GridStyle>
        </Section>
        <Section>
          <GridStyle thumbnail={pic6}>
          </GridStyle>
        </Section>
        <Section>
          <GridStyle thumbnail={pic7}>
          </GridStyle>
        </Section>


      </SimpleGrid>


    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
