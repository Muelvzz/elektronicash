export default function Footer() {
  return (
    <>    
      <footer className="bg-(--tertiary-color) pt-5">
        <div className="lg:w-2/3 lg:justify-self-center px-4 md:px-12">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center text-center mb-5">
              <img src="logo.png" alt="Logo" className="h-12 mb-5" />
              <p className="text-(--neutral-color)">We are more than a service provider — we are your trusted partner for fair value, safe transactions, and reliable quality.</p>  
            </div>
            <div>
              <ul className="text-(--neutral-color) flex gap-x-2 justify-center">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Branches</a></li>
                <li><a href="#">Testimonials</a></li>
              </ul>
            </div>
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