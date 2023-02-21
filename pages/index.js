import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a web developer based in Morocco!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            El Mahdi BOUAITI
          </Heading>
          <p>(Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/elmahdibouaiti.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
        Meet El Mahdi, a highly skilled and experienced full stack developer and UI/UX designer based in Morocco. With 5 years of experience in the industry, El Mahdi has honed their expertise in a wide range of technologies and tools, including <strong>C/C++, HTML, CSS, JavaScript, React.js, Next.js, Three.js, Bootstrap, jQuery, PHP, Laravel, Python, Django, Pygame, Java/JEE, C#, VB.NET, Adobe XD, and Figma</strong>.<br />

        &ensp;El Mahdi is passionate about crafting seamless and intuitive user experiences for web and mobile applications. They are committed to creating user-friendly and visually appealing interfaces that not only look great but also function optimally. With a deep understanding of user behavior and interaction design, El Mahdi is skilled in designing interfaces that are both aesthetically pleasing and highly functional.<br />

        &ensp;In addition to their design skills, El Mahdi is a highly skilled full stack developer with extensive experience in developing web and mobile applications from start to finish. They have expertise in building robust and scalable applications using the latest technologies, frameworks, and tools. From the back-end architecture to the front-end design, El Mahdi is dedicated to delivering top-quality solutions that meet and exceed client expectations.<br />

        &ensp;Beyond their technical skills, El Mahdi is a great collaborator who prioritizes communication and teamwork in all their projects. They are dedicated to understanding the unique needs and goals of each client, and work closely with them to deliver tailored solutions that are both effective and efficient.

        &ensp;Whether you're looking to build a new web or mobile application, improve the design of an existing platform, or add new features and functionality to your digital presence, El Mahdi is the perfect partner to help you achieve your goals. Contact them today to learn more about their services and how they can help take your digital presence to the next level.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Mohammedia, Morocco.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Completed the baccalauréat&apos;s Program in Mohamed 5 in Essaouira
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Studying mathematics and computer science at the Polydisciplinary Faculty in Safi
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Studying engineering at <Link href="https://www.hightech.edu/" target="_blank">High-Tech</Link> Higher Education School
        </BioSection>
        <BioSection>
          <BioYear>july-october 2022</BioYear>
          Being an intern at <Link href="https://avaliance.com/" target="_blank">Avaliance</Link> as a back-end developer using PHP Laravel and a UI/UX designer using Adobe xd.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,Machine Learning and Design
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/elmahdibouaiti" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @elmahdibouaiti
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/bouaiti_el" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @bouaiti_el
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/el-mahdi-bouaiti-92a708215/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @elmahdibouaiti
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/el.mahdi.bouaiti?igshid=YmMyMTA2M2Y=" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @elmahdibouaiti
              </Button>
            </Link>
          </ListItem>
        </List>

      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
