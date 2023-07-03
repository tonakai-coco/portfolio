import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
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
          <WorkGridItem id="band1-1" title="Band1-2" thumbnail={thumbBand}>
            Band1-3
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="band2-1" title="Band2-2" thumbnail={thumbBand}>
            Band2-3
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="band3-1" title="Band3-2" thumbnail={thumbBand}>
            Band3-3
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
