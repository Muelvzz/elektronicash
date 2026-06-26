import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import ProductCategory from "./components/ProductCategory";
import Branches from "./components/Branches";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import { HomePageProvider } from "./context/HomePageContext";

export default function App() {

  return (
    <>
      <HomePageProvider>
        <Nav />
        <main>
          <Hero />
          <AboutUs />
          <ProductCategory />
          <Branches />
          <Testimonials />
        </main>
        <Footer />
      </HomePageProvider>
    </>
  );
}