import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
import Script from 'next/script'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <>
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Sharukhi's homepage" />
        <meta name="author" content="Ataullah Sharukhi" />
        <meta name="author" content="Sharukhi" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Sharukhi" />
        <meta name="twitter:site" content="@sharukhi_" />
        <meta name="twitter:creator" content="@sharukhi_" />
        <meta property="og:site_name" content="Sharukhi" />
        <meta name="og:title" content="Sharukhi" />
        <meta property="og:type" content="website" />

        <title>Sharukhi</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
{/*        <LazyVoxelDog /> */}

        {children}

        <Footer />
      </Container>
    </Box>
    <script data-goatcounter="https://ataullah.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script> 
    </>
  )
}

export default Main
