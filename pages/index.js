import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('BlackAlpha 800', 'BlackAlpha 800')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
      
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ataullah Sharukhi
          </Heading>
          <p>Student</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/avatar.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
        Hi, I’m Sharukhi. a tech-savvy and a student with a passion for all things related to technology. From building computers and coding websites to troubleshooting technical issues and exploring new software, I'm constantly trying to learn and grow in the field. I'm always up for a challenge and I love to explore new technologies and find creative solutions to problems. In my free time, You can find tinkering with my latest project.I am excited to see where my love of technology takes me in the future.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>



      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <li>Python</li>
        <li>Docker</li>
        <li>Figma</li>
        <li>Photoshop</li>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/sharukhi" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @sharukhi
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/sharukhi_" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @sharukhi_
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/ataullah_sharukhi" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @ataullah_sharukhi
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title">
          Contact Me
        </Heading>
        <p>
          Want to ask any questions contact me.
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="mailto:sharukhi05@pm.me"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Contact Me
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home

