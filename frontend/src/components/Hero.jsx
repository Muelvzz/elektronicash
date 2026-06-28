import { HomePageContext } from "../context/HomePageContext"

export default function Hero() {
  const hero = HomePageContext().hero;

  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-8 text-center">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat h-screen w-full opacity-90"></div>

      <div className="w-full md:w-2/3 lg:w-2/5 z-98">
        <div>
          <h1 className="font-headline font-semibold text-(--tertiary-color)">{ hero.title }</h1>
          <p className="text-(--neutral-color)">{ hero.subtitle }</p>
        </div>
        <div className="flex gap-4 justify-center mt-6">
          <button className="bg-(--primary-color) text-(--tertiary-color) px-4 py-2 rounded-lg font-bold">Learn More</button>
          <button className="bg-(--tertiary-color) border border-(--primary-color) text-(--primary-color) px-4 py-2 rounded-lg font-bold">Contact Us</button>
        </div>
      </div>
    </section>
  )
}