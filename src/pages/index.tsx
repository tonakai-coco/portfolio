import Section from '@/components/layouts/section'
import {
  Container,
  Box,
  Heading,
  Text,
  Image,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import Paragraph from '@/components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Link from 'next/link'

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
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>Paragraph</Paragraph>
        <Box align="center" my={4}>
          <Link href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </Link>
        </Box>
      </Section>
    </Container>
  )
}
export default Page
