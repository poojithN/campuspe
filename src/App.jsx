import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Discover from "./components/Discover";
import Resume from "./components/Resume";
import Feature from "./components/Feature";
import Apps from "./components/Apps";
import Support from "./components/Support";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import { collegeFeature, employerFeature } from "./constants/content";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Discover />
        <Resume />
        <Feature {...collegeFeature} />
        <Feature {...employerFeature} />
        <Apps />
        <Support />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
