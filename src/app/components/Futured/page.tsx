import Image from "next/image"; // Import Image from Next.js
import Link from "next/link";

export default function Futured() {
    return (
        <div className="bg-gradient-to-r from-yellow-200 to-orange-600  px-4 py-8 ">
            <div className="container mx-auto">
                {/* Title and View All Button */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <h1 className="text-center sm:text-6xl md:text-5xl font-semibold text-blue-500 mb-4 md:mb-0">
                        Featured Fresh Brews
                    </h1>
                    <a href="#" className="text-blue-500 hover:underline mt-2 md:mt-0">
                        View All Fresh Brews
                    </a>
                </div>

                {/* Tabs */}
                <div className="mt-6">
                    <div className="flex space-x-6 sm:text-lg font-bold border-b-2 border-gray-300 pb-2">
                        <button className="hover:underline">Customer Favorites</button>
                        <button className="hover:underline">Freshly Brewed</button>
                        <button className="hover:underline">Newly Brewed</button>
                    </div>
                </div>

                {/* Product Cards Section */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                    {/* Product Card 1 */}
                    <Link
                        href="/products1"
                        className="w-full flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <Image
                            src="/mac1.jpeg"
                            alt="Mocha"
                            width={300}
                            height={200}
                            className="object-cover rounded-t-lg w-full h-72"
                        />
                        <h2 className="mt-2 text-lg font-semibold text-center text-blue-500">MOCHA</h2>
                        <p className="text-green-600 text-center">USD $1.50</p>
                        <div className="flex items-center mt-1">
                            <span className="text-yellow-400">★★★★★</span>
                            <Link href="/products/1#reviews" className="ml-2 text-sm text-blue-500">Write Review</Link>
                        </div>
                    </Link>

                    {/* Product Card 2 */}
                    <Link
                        href="/products2"
                        className="w-full flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <Image
                            src="/cap1.jpg"
                            alt="Latte"
                            width={300}
                            height={200}
                            className="object-cover rounded-t-lg w-full h-72"
                        />
                        <h2 className="mt-2 text-lg font-semibold text-center text-blue-500">LATTE</h2>
                        <p className="text-green-600 text-center">USD $1.50</p>
                        <div className="flex items-center mt-1">
                            <span className="text-yellow-400">★★★★★</span>
                            <Link href="/products/2#reviews" className="ml-2 text-sm text-blue-500">Write Review</Link>
                        </div>
                    </Link>

                    {/* Product Card 3 */}
                    <Link
                        href="/products3"
                        className="w-full flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <Image
                            src="/cap2.jpg"
                            alt="Cappuccino"
                            width={300}
                            height={200}
                            className="object-cover rounded-t-lg w-full h-72"
                        />
                        <h2 className="mt-2 text-lg font-semibold text-center text-blue-500">CAPPUCCINO</h2>
                        <p className="text-green-600 text-center">USD $1.50</p>
                        <div className="flex items-center mt-1">
                            <span className="text-yellow-400">★★★★★</span>
                            <Link href="/products/3#reviews" className="ml-2 text-sm text-blue-500">Write Review</Link>
                        </div>
                    </Link>

                    {/* Product Card 4 */}
                    <Link
                        href="/products4"
                        className="w-full flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <Image
                            src="/img9.jpg"
                            alt="Flat White"
                            width={300}
                            height={200}
                            className="object-cover rounded-t-lg w-full h-72"
                        />
                        <h2 className="mt-2 text-lg font-semibold text-center text-blue-500">FLAT WHITE</h2>
                        <p className="text-green-600 text-center">USD $1.50</p>
                        <div className="flex items-center mt-1">
                            <span className="text-yellow-400">★★★★★</span>
                            <Link
                                href="/products/4#reviews"
                                className="ml-2 text-sm text-blue-500 hover:underline"
                            >
                                Write Review
                            </Link>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
