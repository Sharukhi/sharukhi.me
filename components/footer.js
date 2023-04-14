import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Sharukhi. All Rights Reserved. 
      Based on <a href='https://craftz.dog/'>craftz.dog</a> 
    </Box>
  )
}

export default Footer
