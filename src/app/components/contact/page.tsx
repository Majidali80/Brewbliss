import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen text-black"
        style={{ backgroundImage: "url('/bg4.jpg')" }}>
      {/* Navbar or Title Section */}
      <div className="text-center py-12 mt-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-900 to-blue-500 animate-pulse">
          Contact Us
        </h1>
        <p className="text-2xl mt-4 max-w-lg font-bold mx-auto text-yellow-400">We'd love to hear from you. Feel free to reach out anytime!</p>
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-6">
        <form className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg shadow-teal-500/50">
          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">Your Message</label>
              <textarea
                placeholder="Write your message here"
                className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-6 p-4 text-white bg-teal-500 rounded-md hover:bg-teal-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Footer Section */}
      <div className="text-center py-8 mt-6">
        <Link href="/" className="text-teal-300 hover:text-teal-500 transition duration-300">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
