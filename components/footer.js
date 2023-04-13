import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Sharukhi. All Rights Reserved. 
      Template by <a href='https://github.com/craftzdog/craftzdog-homepage'>craftzdog</a> 
    </Box>
  )
}

export default Footer
