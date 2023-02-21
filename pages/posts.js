import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPortfolio from '../public/images/contents/ElMahdiLaravel.jpeg'
import thumbHowToUseInkdrop from '../public/images/contents/ElMahdipython.jpeg'
import thumbFishWorkflow from '../public/images/contents/ElMahdijs.jpeg'
import thumbMyDeskSetup from '../public/images/contents/ElMahdimaster.jpeg'
import thumb500PaidUsers from '../public/images/contents/elmahdi.png'
import thumbFinancialGoal from '../public/images/contents/ElMahdijava.jpeg'
import thumbHowToPriceYourself from '../public/images/contents/ElMahdifrent.jpeg'
import thumb50xFaster from '../public/images/contents/ElMahdigsap.jpeg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Certifications
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Learn Just Enough Laravel to Get Started as a Web Developer"
            thumbnail={thumbPortfolio}
            href="https://www.udemy.com/certificate/UC-bd7fc44f-940c-4154-834b-afa3b08ac052/"
          />
          <GridItem
            title="Learn Python Programming : Step By Step Guide for Beginners"
            thumbnail={thumbHowToUseInkdrop}
            href="https://www.udemy.com/certificate/UC-a1ef9584-51f4-4b21-b798-1975bff491b2/"
          />
          <GridItem
            title=" Modern JavaScript for React JS - ES6 [2023]"
            thumbnail={thumbFishWorkflow}
            href="https://www.udemy.com/certificate/UC-a731c4f6-523e-4a8b-bc76-48486115db14/"
          />
          <GridItem
            title="Master Python: Beginner to Pro with Hands-on Coding Tasks"
            thumbnail={thumbMyDeskSetup}
            href="https://www.udemy.com/certificate/UC-f261a23a-1eb5-4089-b8d8-25ab74544b9c/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Growth-Driven Design"
            thumbnail={thumb500PaidUsers}
            href="https://app-eu1.hubspot.com/academy/achievements/rlqvjqhf/en/1/el-mahdi-bouaiti/growth-driven-design"
          />
          <GridItem
            title="Learn Java Fundamentals for Beginners"
            thumbnail={thumbFinancialGoal}
            href="https://www.udemy.com/certificate/UC-fc392ac4-e896-4c61-8838-b4e8518c500e/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="The Web Front End Learning Guide "
            thumbnail={thumbHowToPriceYourself}
            href="https://www.udemy.com/certificate/UC-91ae1653-9675-44b6-a371-cc9a8c586532/"
          />
          <GridItem
            title="The Complete GSAP: JavaScript ,HTML and CSS Course for 2023 "
            thumbnail={thumb50xFaster}
            href="https://www.udemy.com/certificate/UC-8354ad70-989e-484f-a57d-281025478a0c/"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
