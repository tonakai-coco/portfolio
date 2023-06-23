import {
  Container,
  Box,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('lightblue', 'red')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m an embedded software developer based in Tochigi!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Yoshinori Kashimura
          </Heading>
          <Text>Software Developer</Text>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
