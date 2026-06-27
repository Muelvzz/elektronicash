import { HomePageContext } from "../context/HomePageContext";

export default function ContactUs() {
  const contactUs = HomePageContext().contactUs;

  return (
    <section className="flex flex-col justify-center items-center text-center px-4 py-12">
      <div className="flex flex-col md:flex-row gap-x-10">
        <div className="w-full max-w-lg rounded-[32px] bg-slate-100 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.12)]">
          <div className="mb-8 text-left">
            <h2 className="uppercase tracking-[0.25em] text-(--neutral-color)">
              Get in Touch
            </h2>
            <h2 className="mt-3">
              Have a question about a product or your order?
            </h2>
            <p className="mt-3 text-(--neutral-color)">
              Our team is here to help. Send us a message and we’ll get back to you as soon as possible.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="mb-3 text-left font-semibold">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>

            <div>
              <label className="mb-3 text-left font-semibold">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>

            <div>
              <label className="mb-3 text-left font-semibold">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="How can we help you?"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-(--primary-color) px-6 py-3 text-white transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-10 w-full max-w-lg rounded-[32px] bg-white/90 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] flex flex-col justify-center">
          <div className="mb-6 text-left">
            <h3 className="text-lg font-semibold text-slate-900">
              Contact Information
            </h3>
          </div>

          <div className="space-y-5">
            <div className="flex gap-4">
              <div>
                <div className="flex items-center justify-center rounded-full bg-(--primary-color) p-2">
                  <img src="/phone.png" alt="Phone Icon" className="w-8"/>
                </div>
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">Phone</p>
                <p className="text-sm text-slate-600">{contactUs.phone}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <div className="flex items-center justify-center rounded-full bg-(--primary-color) p-2">
                  <img src="/location.png" alt="Location Icon" className="w-8"/>
                </div>
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">Headquarters</p>
                <p className="text-sm text-slate-600">{contactUs.headquarters.address}</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div>
                <div className="flex items-center justify-center rounded-full bg-(--primary-color) p-2">
                  <img src="/clock.png" alt="Clock Icon" className="w-8"/>
                </div>
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">Business Hours</p>
                <p className="text-sm text-slate-600">
                  {contactUs.headquarters.schedule}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {contactUs.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 transition hover:bg-slate-200"
              >
                <img src={link.image} alt={link.platform} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}