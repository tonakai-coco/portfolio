import {
  Container,
  Box,
  Heading,
  Text,
  Image,
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
      <Box display={{ md: 'flex' }} alignItems="center">
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/ykashimura.png"
            alt="profile image"
          />
        </Box>
        <Box flexGrow={1} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
          <Heading as="h2" variant="page-title">
            Yoshinori Kashimura
          </Heading>
          <Text>Software Developer</Text>
        </Box>
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box
          flexShrink={1}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image src="/tonakai_band_equipment.jpeg" alt="tonakai equipment" />
        </Box>
      </Box>
    </Container>
  )
}
export default Page
