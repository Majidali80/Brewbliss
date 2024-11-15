import Link from "next/link"
import Image from "next/image";


export default function Navbar() {
    return (
        <div> <title>Brew Bliss</title>
  <meta name="description" content="Discover the best coffee at BrewBliss. From freshly ground beans to expert brewing tips, we provide everything you need for the perfect cup of coffee. Enjoy a premium coffee experience with our carefully curated blends and accessories." 
  />
  
  <nav className="p-3 flex items-center text-start w-full bg-gradient-to-r from-yellow-400 to-orange-500 h-20 px-4 py-2">
    
    {/* Logo */}
    <div className="h-24 w-32 sm:h-28 sm:w-32 md:h-24 md:w-32 lg:h-28 lg:w-38">
      <img 
        src="/logo.png" 
        alt="Logo"
          title="Brew Bliss"
          height={51}
          width={51}
        className="h-full w-full object-cover rounded"
      />
    </div>
    
    {/* Navigation Links */}
    <div className="hidden font-semibold md:flex gap-12 ml-24">
    <Link href="/" className="hover:text-green-900">HOME</Link>
    <Link href="/menu" className="hover:text-green-900">MENU</Link>
    <Link href="/about" className="hover:text-green-900">ABOUT</Link>
       </div>

          
    {/* Post an Ad Button */}
    <div className="flex justify-end space-x-4 w-full">
  {/* Join Now Button */}
  <button className="hidden md:flex border items-center justify-center px-6 py-2 h-10 text-white bg-black  border-gray-400 hover:text-green-500 rounded-full">
    Join Now
  </button>

  {/* Login Button */}
  <button className="hidden md:flex border items-center justify-center px-6 py-2 h-10 text-black bg-transparent border-gray-400 hover:text-green-900 rounded-full">
    Login
  </button>
</div>


    

    {/* Mobile Menu (Hamburger or Dropdown) */}
    <div className="md:hidden flex items-center">
      <button className="text-black">
        {/* Add a hamburger icon here or toggle for mobile menu */}
        <span>☰</span>
      </button>
    </div>
  </nav>
</div>

    )
}
