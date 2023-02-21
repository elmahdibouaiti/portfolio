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
  <Layout title="Dot.Net Digital Marketing Agency">
    <Container>
      <Title>
      Dot.Net Digital Marketing Agency <Badge></Badge>
      </Title>
      <P>
      Welcome to My Digital Marketing Solutions, your one-stop-shop for comprehensive digital marketing services. As the sole creator of this website, I understand the importance of having a strong online presence, and I am here to help you achieve your business goals.<br />

      &ensp;My services include search engine optimization (SEO), social media marketing, pay-per-click (PPC) advertising, email marketing, content marketing, and web design and development. I have years of experience in the digital marketing industry and am well-versed in the latest tools and techniques to help you succeed online.<br />

      &ensp;I take a personalized approach to every project and work closely with my clients to create a customized digital marketing strategy that meets their specific needs and objectives. I believe in transparency, collaboration, and open communication, and I will provide regular updates and reports to keep you informed of our progress.<br />

      &ensp;At My Digital Marketing Solutions, I am committed to helping your business succeed online. I offer competitive pricing and exceptional service, and I am passionate about helping my clients achieve their marketing goals.<br />
      &ensp;Whether you're looking to increase your website traffic, generate more leads, or boost your sales and revenue, I am here to help. Contact me today to learn how I can help you grow your business online.



      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source code</Meta>
          <Link href="https://github.com/elmahdibouaiti/digital-agency">
          https://github.com/elmahdibouaiti/digital-agency <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML 5,Css 3, Scss, jQuery, Bootstrap</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/digital-agency-website-template.jpg" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
