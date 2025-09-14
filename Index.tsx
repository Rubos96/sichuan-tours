import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Destinations from '../components/Destinations';
import About from '../components/About';
import Contact from '../components/Contact';

function Index() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Destinations />
      <About />
      <Contact />
    </Layout>
  );
}

export default Index;