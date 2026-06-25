export default function Footer() {
  return (
    <>    
      <footer className="bg-(--tertiary-color) pt-5">
        <div className="flex flex-col gap-y-5 md:grid md:grid-cols-2">
          <div>
            <img src="logo.png" alt="Logo" className="h-12 mb-5" />
            <p className="text-(--neutral-color)">We are more than a service provider — we are your trusted partner for fair value, safe transactions, and reliable quality.</p>  
          </div>
          <div className="flex justify-self-end gap-x-10">
            <div>
              <h4 className="mb-3">Company</h4>
              <ul className="text-(--neutral-color) flex flex-col gap-y-2">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Branches</a></li>
                <li><a href="#">Testimonials</a></li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </footer>
      <div className="mt-5 bg-(--secondary-color)/60 w-full p-5">
        <p className="text-(--neutral-color) text-center">
          &copy; 2026 Elektronicash Gadgets Phoneshop Inc. All rights reserved.
        </p>
      </div>
    </>
  )
}