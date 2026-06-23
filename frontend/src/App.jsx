import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";

import { HomePageProvider } from "./context/HomePageContext";

export default function App() {

  return (
    <>
      <HomePageProvider>
        <Nav />
        <main>
          <Hero />
          <AboutUs />
        </main>
      </HomePageProvider>
    </>
  );
}