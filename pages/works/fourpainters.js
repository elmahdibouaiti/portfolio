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
      As a web developer, one of the most rewarding experiences is to work on a project that makes a positive impact on people's lives. That's exactly what I was able to achieve when I created a website for a hospital that aimed to enhance the patient experience and streamline operations.<br />

      &ensp;The project began with a clear goal in mind: to create a website that was modern, user-friendly, and intuitive, designed to meet the needs of both patients and hospital staff. To achieve this, I began by conducting a thorough analysis of the hospital's existing website and identifying areas where improvements could be made.<br />

      &ensp;One of the key focus areas was the patient experience. With this in mind, I worked to develop a clean and intuitive interface that made it easy for patients to access the information they needed. This included doctor profiles, service descriptions, and appointment scheduling. By making it simple and easy for patients to find the information they needed, we were able to enhance the patient experience and reduce the workload of hospital staff.<br />

      &ensp;In addition, we also developed a secure patient portal, which enabled patients to view their medical records and communicate with healthcare providers. This was an important feature for both patients and hospital staff, as it helped to streamline communication and reduce administrative tasks.<br />
      &ensp;Another key focus of the website was to ensure that it was mobile-responsive, enabling patients to access information on the go. With mobile usage on the rise, it was important to ensure that the website could be accessed from a range of devices, including smartphones and tablets.<br />
      &ensp;Overall, the website we created was a significant improvement over the hospital's previous website. By focusing on the needs of patients and hospital staff, we were able to create a website that not only enhanced the patient experience but also improved the efficiency of hospital operations. By developing a website that met the needs of both patients and staff, we were able to contribute to the success of this healthcare institution.





      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source code</Meta>
          <Link href="https://github.com/elmahdibouaiti/Hospitale">
            https://github.com/elmahdibouaiti/Hospitale <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML 5,Css 3, Scss, jQuery, Bootstrap</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/hospital-website-template.jpg" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
