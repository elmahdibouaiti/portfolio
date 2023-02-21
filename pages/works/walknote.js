import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="SwatchShop">
    <Container>
      <Title>
      SwatchShop <Badge></Badge>
      </Title>
      <P>
      As a web developer, I designed and developed SwatchShop, an online retail store that specializes in offering an extensive range of high-quality swatches and fabrics to cater to various design and fashion needs.<br />

      &ensp;I created a user-friendly website with easy navigation to help customers find their desired swatches quickly. The website is organized by color, texture, and material, providing a comprehensive collection of swatches for designers, fashion enthusiasts, and crafters.<br />

      &ensp;To ensure a seamless customer experience, I designed the website with an easy-to-use interface that features responsive design for compatibility with various devices. I also implemented secure payment systems and integrated customer service support to ensure customer satisfaction.<br />

      &ensp;In addition to developing the website, I also worked on the branding, including the design of the logo and visual identity, to create a cohesive and memorable brand for SwatchShop.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source code</Meta>
          <Link href="https://github.com/elmahdibouaiti/watchshop">
            https://github.com/elmahdibouaiti/watchshop <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML 5,Css 3, Scss, JS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/swatchshop.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
