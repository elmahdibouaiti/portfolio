import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/seo-agency-website-template.jpg'
import thumbWalknote from '../public/images/works/swatchshop.png'
import thumbFourPainters from '../public/images/works/hospital-website-template.jpg'
import thumbMenkiki from '../public/images/works/digital-agency-website-template.jpg'
import thumbMargelo from '../public/images/works/HomePage.png'
import thumbModeTokyo from '../public/images/works/DocPlus.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Web-site
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="SEOMaster" thumbnail={thumbInkdrop}>
          Your Ultimate Resource for Search Engine Optimization (SEO)
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="SwatchShop"
            thumbnail={thumbWalknote}
          >
            Your One-Stop Shop for Quality Swatches and Fabrics.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="Modern Hospital Website"
            thumbnail={thumbFourPainters}
          >
            Enhancing Patient Experience and Streamlining Operations
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Dot.Net Digital Marketing Agency">
          Your Partner in Digital Marketing
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          UI/UX 
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Territoire Marocaine">
          Territoire Marocain is a mobile application that allows users to browse and purchase high-quality agricultural products sourced from Morocco.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="DocPlus"
          >
            Mobile app for booking doctor appointments.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
         
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        
      </Section>

      
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
