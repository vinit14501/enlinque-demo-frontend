import Services from "../Components/home/Services"
import Testimonials from "../Components/home/Testimonials"
import Quotes from "../Components/home/Quotes"
import Text from "../Components/home/Text"
import Hero from "../Components/home/Hero"
import Cta from "../Components/home/Cta"
import Cta3 from "../Components/home/Cta3"
import Faq from "../Components/home/Faq"
import ContactCta from "../Components/contact cta/ContactCta"
import { Helmet } from "react-helmet-async"

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Enlinque Consulting</title>
        <meta
          name="description"
          content="We build websites with purpose and performance that elevate brands and engage audiences."
        />
        <meta
          property="og:title"
          content="Enlinque Consulting LLC"
        />
        <meta
          property="og:description"
          content="Engage your audience with websites crafted for performance and purpose."
        />
        <meta
          property="og:image"
          content="https://enlinque.com/path-to-image.jpg"
        />
        <link
          rel="canonical"
          href="https://enlinque.com/"
        />
      </Helmet>

      {/* Hero Section */}
      <Hero aria-label="Hero Section showcasing key services and solutions" />

      {/* Text Section */}
      <section aria-labelledby="startup-solutions-heading">
        <Text />
      </section>

      {/* Fractional CxO CTA */}
      <section aria-labelledby="fractional-cxo-heading">
        <Cta />
      </section>

      {/* Services Section */}
      <section
        id="services"
        aria-labelledby="services-heading"
      >
        <Services />
      </section>

      {/* Website Development CTA */}
      <section aria-labelledby="website-development-heading">
        <Cta3 />
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
      >
        <Faq />
      </section>

      {/* Quotes Section */}
      <section aria-label="Inspirational Quote Section">
        <Quotes />
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        aria-labelledby="testimonials-heading"
      >
        <Testimonials />
      </section>

      {/* Contact CTA Section */}
      <section aria-labelledby="contact-cta-heading">
        <ContactCta />
      </section>
    </>
  )
}
