'use client'; // Ensures this is a client-side component
import Link from "next/link";
import React from 'react';
import Navbar from '../components/Navbar/page';  // Adjust based on your app's directory structure
import Footer from '../components/Footer/page';  // Adjust based on your app's directory structure

export default function Checkout() {
  // Form submission handler (to process payment, for example)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Collect form data here
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    console.log('Form Data:', data);
    
    // Additional logic for payment processing can go here
    // For example, you can call a payment API like Stripe, PayPal, etc.
  };

  // Product details (static in this case, can be fetched dynamically)
  const product = {
    name: 'Product Name',
    image: '/path/to/product-image.jpg', // Adjust the image URL
    price: 1.50,
    description: 'This is a description of the product. It has great features!',
  };

  return (
    <div className="flex flex-col min-h-screen"style={{ backgroundImage: "url('/bg4.jpg')" }}>
      <Navbar /> {/* Assuming you have a Navbar component */}

      <div className="flex flex-col md:flex-row items-center p-6 gap-6">
        {/* Left side: Checkout Form */}
        <div className="w-full md:w-1/2 bg-white p-6 border rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-blue-500 mb-6">Checkout</h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <input
              type="text"
              name="name"
              className="p-4 rounded-lg border border-gray-300"
              placeholder="Enter Your Name"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              className="p-4 rounded-lg border border-gray-300"
              placeholder="Enter Your Email"
              required
            />

            {/* Address */}
            <input
              type="text"
              name="address"
              className="p-4 rounded-lg border border-gray-300"
              placeholder="Enter Your Address"
              required
            />

            {/* Card Number */}
            <input
              type="text"
              name="cardNumber"
              className="p-4 rounded-lg border border-gray-300"
              placeholder="Enter Your Card Number"
              required
            />

            {/* Expiration Date */}
            <div className="flex gap-4">
              <input
                type="text"
                name="expDate"
                className="p-4 rounded-lg border border-gray-300 w-1/2"
                placeholder="MM/YY"
                required
              />
              <input
                type="text"
                name="cvv"
                className="p-4 rounded-lg border border-gray-300 w-1/2"
                placeholder="CVV"
                required
              />
            </div>

            {/* Payment Button */}
            <div className="flex justify-center items-center">
  {/* Link wrapping the button */}
  <Link href="/Thankyou">  {/* Navigate to the '/Thankyou' page when clicked */}
    <button
      type="button"  // 'button' type set to 'button' since it's wrapped in a <Link>
      className="mt-6 p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out 
                 sm:px-6 sm:py-3 
                 md:px-8 md:py-4 
                 lg:px-10 lg:py-5 
                 xl:px-12 xl:py-6"
    >
      Proceed to Payment
    </button>
  </Link>

  {/* Your other content */}
</div>

          </form>
        </div>

        {/* Right side: Product Details */}
        <div className="w-full md:w-1/2 bg-white p-6 border rounded-lg shadow-lg mt-6 md:mt-0">
          <h2 className="text-3xl font-semibold text-center text-blue-500 mb-4">Product Details</h2>

          <div className="flex flex-col items-center">
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-2/3 md:w-1/2 h-auto mb-4 rounded-lg shadow-lg"
            />

            {/* Product Name */}
            <h3 className="text-xl font-bold text-center text-blue-600 mb-2">{product.name}</h3>

            {/* Product Description */}
            <p className="text-center text-lg text-gray-700 mb-4">{product.description}</p>

            {/* Product Price */}
            <p className="text-xl text-green-600 font-semibold">USD ${product.price.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <Footer /> {/* Assuming you have a Footer component */}
    </div>
  );
}
