import { HomePageContext } from "../context/HomePageContext"

export default function Hero() {
  const { homepage: { hero } } = HomePageContext()

  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-8 text-center">
      <div className="w-full md:w-2/3 lg:w-2/5">
        <div>
          <h1 className="font-(--font-headline)">{ hero.title }</h1>
          <h4 className="text-(--neutral-color)">{ hero.subtitle }</h4>
        </div>
        <div className="flex gap-4 justify-center mt-6">
          <button className="bg-(--primary-color) text-(--tertiary-color) px-4 py-2 rounded-lg font-bold">Learn More</button>
          <button className="bg-(--tertiary-color) border border-(--primary-color) text-(--primary-color) px-4 py-2 rounded-lg font-bold">Contact Us</button>
        </div>
      </div>
    </section>
  )
}