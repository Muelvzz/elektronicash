import Nav from "./components/Nav";
import Hero from "./components/Hero";

import { HomePageProvider } from "./context/heroContext";

export default function App() {

  return (
    <>
      <HomePageProvider>
        <Nav />
        <main>
          <Hero />
        </main>
      </HomePageProvider>
    </>
  );
}