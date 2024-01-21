import Head from "next/head";
import { useTheme } from "next-themes";

import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Courses from '../components/courses';
import ContactSection from '../components/contactSection';

const Home = () => {
  const { setTheme } = useTheme();
  setTheme('light');

  return (
    <>
      <Head>
        <title>Design Logue | online coaching for NIFT, NID and UCEED</title>
        <meta
          name="description"
          content="Design Logue is an online coaching institute for NIFT, NID and UCEED exams with track record of 100% placement"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Why Design Logue"
        title=" Why should you enroll in Design Logue?">
        Choose Design Logue for exceptional NIFT, NID, IIT (UCEED, CEED) exam preparation. Our distinguished alumni faculty nurtures creativity, reflecting in our outstanding track record. While we've achieved a 100% placement result, success is crafted through your dedication and our expert guidance.
      </SectionTitle>
      {/* <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} /> */}
      <SectionTitle
        pretitle="Courses"
        title="What are the courses that we offer">
      </SectionTitle>
      {/* <Video /> */}
      <Courses/>
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our student said">
        Design Logue students are currently studying in various top institutions (IIT, NID, and NIFT) of India, Here is was they want to say about us.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <ContactSection/>
      {/* <PopupWidget /> */}
    </>
  );
}

export default Home;