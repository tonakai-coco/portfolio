import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="lightblue" p={3} mb={6} align="center">
        Hello, I&apos;m an embedded software developer based in Tochigi!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Yoshinori Kashimura
          </Heading>
          <p>Software Developer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
