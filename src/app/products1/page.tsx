import Link from 'next/link';
import Navbar from '../components/Navbar/page';
import Footer from '../components/Footer/page';

function MochaProductPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="flex flex-col items-center flex-grow bg-cover bg-center bg-no-repeat"
           style={{ backgroundImage: "url('/bg2.jpg')" }}>
        
        {/* Title Section */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mt-10 mb-6 px-6 sm:px-0">
          Mocha Coffee - A Perfect Blend of Richness and Taste
        </h1>
        
        {/* Product Image */}
        <img
          src="/pr2.png"
          alt="Mocha Coffee"
          className="w-full sm:w-2/3 md:w-1/3 h-auto mb-6 shadow-lg rounded-lg"
        />
        
        {/* Buttons for interaction */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6 w-full justify-center">
          <button className="bg-pink-500 text-white px-6 py-3 rounded-lg mb-2 sm:mb-0 hover:bg-brown-600 transition duration-300 w-full sm:w-auto">
            Order Now
          </button>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg mb-2 sm:mb-0 hover:bg-gray-700 transition duration-300 w-full sm:w-auto">
            Add to Cart
          </button>
          <button className="bg-teal-500 text-white px-6 py-3 rounded-lg mb-2 sm:mb-0 hover:bg-teal-600 transition duration-300 w-full sm:w-auto">
            Gift This Coffee
          </button>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg mb-2 sm:mb-0 hover:bg-blue-600 transition duration-300 w-full sm:w-auto">
            Sub for Delivery
          </button>
        </div>
        
        {/* Product Description */}
        <div className="max-w-4xl mx-auto px-6 sm:px-0 mb-8 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl text-center text-blue-600 font-semibold mb-4">Product Description</h2>
          <p className="text-lg sm:text-xl text-gray-700 text-center mb-4">
            <b>Mocha Coffee</b> offers the perfect balance of rich espresso and silky chocolate flavor. Made with premium Arabica beans, this delightful coffee is blended with chocolate syrup for a sweet and satisfying experience. Whether you prefer it hot or iced, Mocha Coffee is a treat you can enjoy all year round.
          </p>
          
          <p className="text-lg sm:text-xl text-gray-600 text-center mb-6">
            <b>Ingredients:</b> Freshly brewed espresso, chocolate syrup, steamed milk, and a light dusting of cocoa powder.
          </p>
          
          {/* Price */}
          <p className="text-2xl text-green-600 font-bold text-center mb-6">USD $1.50</p>
          
          {/* Payment Link */}
          <div className="text-center">
            <Link href="/Payment" className="bg-blue-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
              Add To Cart
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MochaProductPage;
