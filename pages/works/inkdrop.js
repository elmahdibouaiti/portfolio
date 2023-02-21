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
  <Layout title="seo-agency-website">
    <Container>
      <Title>
      seo-agency-website <Badge></Badge>
      </Title>
      <P>
      SEOMaster is a comprehensive website that provides a range of resources, tools, and information related to search engine optimization (SEO). Whether you are a beginner or an experienced SEO professional, SEOMaster has something for you.<br />

      &ensp;On SEOMaster, you can find detailed guides, tutorials, and articles on various aspects of SEO, including keyword research, on-page optimization, link building, content creation, and more. The site also provides reviews and analysis of various SEO tools and software, so you can make informed decisions about which ones to use for your projects.<br />

      &ensp;In addition, SEOMaster offers a variety of helpful resources, such as an SEO glossary, a list of frequently asked questions, and a community forum where you can connect with other SEO enthusiasts and experts. The site is designed to be user-friendly and accessible, with a clean and intuitive interface that makes it easy to navigate and find what you need.<br />

      &ensp;Overall, SEOMaster is an invaluable resource for anyone who wants to improve their website's search engine rankings and visibility. Whether you are a business owner, marketer, blogger, or web developer, SEOMaster can help you achieve your SEO goals and reach your target audience more effectively.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source code</Meta>
          <Link href="https://github.com/elmahdibouaiti/seomaster">
            https://github.com/elmahdibouaiti/seomaster <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML 5,Css 3, Bootstrap, jQuery</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/seo-agency-website-template.jpg" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
