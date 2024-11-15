import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* Top Section with Background Image */}
      <div className="relative bg-black text-white">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/img3.jpg")' }}>
          <div className="absolute inset-0 bg-black opacity-40"></div> {/* Optional overlay */}
        </div>

        {/* Content Section */}
        <div className="flex items-center justify-between w-full h-[500px] px-6 sm:px-12 md:px-16 relative z-10">
          <div className="w-full sm:w-1/2 md:w-full lg:w-full text-center sm:text-right px-4">
            {/* Heading with color and shadow */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-red-400 font-extrabold mb-4 shadow-lg">
              Find Your Fall
            </h1>
            {/* Description Text with a lighter font color */}
            <p className="text-lg sm:text-xl md:text-2xl font-serif leading-relaxed mb-6 text-gray-200">
              Savor fall with Pumpkin Spice, Chai, or Macchiato.
            </p>
            {/* Button with a vibrant color */}
            <button className="text-white bg-[#AB274F] hover:bg-[#9B1D43] px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition duration-300">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Section with Images and Text */}
      <div className=" py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: 'url("/bg3.webp")' }}>
        <h1 className="text-center text-3xl font-semibold text-blue-600 mb-8">
          "Premium Coffee, Expertly Crafted Blends, Delivered."
        </h1>

        <div className="flex flex-col lg:flex-row justify-center space-x-3 items-center">
          {/* First Image */}
          <div className="md:w-5/12 w-full mb-20 border-3 rounded-lg shadow-lg px-10">
            <Image
              src="/img1.jpeg"
              alt="Three hot creamy drinks in mugs: one coffee with whipped cream, one coffee with froth and drizzle, and one tea with a frothy top."
              width={500}
              height={500}
              className="rounded-lg"
            />
            <p className="text-center pt-10 font-bold font-serif">Deal Of The Week 50% Off </p>
            <div className="flex justify-center items-center my-3">
              <button className="px-10 py-4 bg-blue-500 text-white rounded-full">
                Buy Now
              </button>
            </div>
          </div>

          {/* Second Image */}
          <div className="md:w-5/12 w-full mb-20 border-3 rounded-lg shadow-lg px-10">
            <Image
              src="/img2.jpeg"
              alt="Three hot creamy drinks in mugs: one coffee with whipped cream, one coffee with froth and drizzle, and one tea with a frothy top."
              width={500}
              height={500}
              className="rounded-lg"
            />
            <p className="text-center pt-10 font-bold font-serif">Mega Deal Buy 2 Get 1 Free</p>
            <div className="flex justify-center items-center my-3">
              <button className="px-10 py-4 bg-blue-500 text-white rounded-full">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
