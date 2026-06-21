export default function Nav() {
    return (
        <nav className="bg-(--blue-color) text-(--white-color) grid grid-cols-3 items-center py-4">
            <div>
                <img 
                    src="logo.png" 
                    alt="Logo" 
                    className="h-8" 
                />
            </div>
            <div className="justify-self-center">
                <ul className="flex gap-4">
                    <li><a href="#">Locations</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </div>
            <div className="justify-self-end">
                <button className="bg-(--white-color) text-(--blue-color) px-4 py-2 rounded-lg font-bold">Contact Us</button>
            </div>
        </nav>
    )
}