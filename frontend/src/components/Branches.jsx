import { useEffect, useState } from "react";
import { HomePageContext } from "../context/HomePageContext";

export default function Branches() {
  const {
    homepage: { branches },
  } = HomePageContext();

  const branchList = branches?.branchList || [];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!branchList.length) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % branchList.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [branchList.length]);

  if (!branchList.length) {
    return null;
  }

  const activeBranch = branchList[activeIndex];

  return (
    <section className="flex flex-col items-center text-center px-4 py-12">
      <div className="w-full md:w-2/3 lg:w-3/5 mb-10">
        <h1 className="text-3xl font-semibold mb-3">{branches.title}</h1>
        <p className="text-(--neutral-color)">{branches.content}</p>
      </div>

      <article className="w-full md:w-2/3 lg:w-1/3 bg-(--tertiary-color) shadow-lg rounded-3xl overflow-hidden">
        <div className="flex flex-col">
          <div className="h-80 md:h-auto">
            <img
              src={activeBranch.image}
              alt={activeBranch.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute left-4 top-4 rounded-full bg-white/90 p-3 shadow">
              <div className="w-4 h-4 rounded-full bg-(--primary-color)" />
            </div>
          </div>

          <div className="p-6 flex flex-col justify-between text-left">
            <div className="flex flex-col gap-y-2 mb-5">
              <h3>{activeBranch.name}</h3>
              <p className="text-(--neutral-color)">{activeBranch.address}</p>
              <p className="text-(--primary-color)">{activeBranch.schedule}</p>
            </div>

            <div>
              <a
                href={activeBranch.mapLink}
                className="inline-flex items-center justify-center rounded-full bg-(--primary-color) px-5 py-3 text-sm font-medium text-white transition hover:bg-(--primary-color)"
              >
                View on map
              </a>
            </div>
          </div>
        </div>
      </article>

      <div className="mt-6 flex items-center justify-center gap-3">
        {branchList.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-(--primary-color) w-7" : "bg-(--neutral-color)"
            }`}
            aria-label={`Show branch ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}