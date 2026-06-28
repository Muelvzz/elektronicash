import { HomePageContext } from "../context/HomePageContext";

export default function AboutUs() {
  const aboutUs = HomePageContext().aboutUs;

  return (
    <section className="flex flex-col justify-center items-center text-center my-20">
      <h2 className="mb-20 inline-block border-b-4 border-(--secondary-color) pb-2">Why Elektronicash?</h2>
      <div className="w-full md:w-2/3 flex flex-col gap-y-5 lg:grid lg:grid-cols-3 lg:gap-x-4">
        { aboutUs.whyChooseUs.map((data, index) => (
          <div key={index} className="mb-8">
            <aside className={`${ index === 1 && ('bg-(--secondary-color)/50') } bg-(--primary-color)/50 justify-self-center rounded-md`}>
              <img src={data.image} alt={data.title} className="p-3 w-16 h-16" />
            </aside>
            <div className="mt-4 flex flex-col gap-y-3">
              <h3>{data.title}</h3>
              <p className="text-(--neutral-color)">{data.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full md:w-2/3 lg:w-3/5">
      </div>
    </section>
  )
}