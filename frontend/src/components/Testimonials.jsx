import { HomePageContext } from "../context/HomePageContext";

export default function Testimonials() {
  const testimonials = HomePageContext().testimonials;
  const testimonialList = testimonials?.testimonialList || [];

  if (!testimonialList.length) {
    return null;
  }

  const duplicatedList = [...testimonialList, ...testimonialList];

  return (
    <section className="flex flex-col justify-center items-center text-center px-4 py-12">
      <div className="w-full md:w-2/3 lg:w-3/5 mb-10">
        <h1 className="text-3xl font-semibold mb-3">{testimonials.title}</h1>
        <p className="text-gray-600">{testimonials.content}</p>
      </div>

      <div className="w-full overflow-hidden">
        <div className="carousel-track flex gap-5">
          {duplicatedList.map((testimonial, index) => (
            <div
              key={index}
              className="shrink-0 w-full md:w-1/2 lg:w-1/3 flex flex-col gap-y-5 bg-gray-100 p-8 rounded-lg shadow-md"
            >
              <div className="flex mb-4">
                <img src="/quotes.png" alt="Quotes Logo" className="w-12" />
              </div>
              <div className="grow flex flex-col justify-between">
                <p className="text-gray-700 text-center text-base">
                  <i>"{testimonial.feedback}"</i>
                </p>
                <h3 className="text-lg font-semibold text-gray-800 mt-4">
                  - {testimonial.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}