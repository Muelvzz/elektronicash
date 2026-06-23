import { useHomePage } from "../context/heroContext"

export default function Hero() {

  const { homepage: { hero } } = useHomePage()

  return (
    <section className="text-[var(--grey-color)]">
      <div>
        <h1 className="font-[var(--font-headline)]">{ hero.title }</h1>
        <h3>{ hero.subtitle }</h3>
      </div>
      <div>
        <button>Learn More</button>
        <button>Contact Us</button>
      </div>
    </section>
  )
}