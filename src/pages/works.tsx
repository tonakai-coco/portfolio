import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '@/components/layouts/section'
import { WorkGridItem } from './grid-item'
import thumbBand from '../../public/tonakai_band_equipment.jpeg'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="band" title="Band" thumbnail={thumbBand}>
            Band
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
