import Link from "next/link";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { FaTwitter, FaSpotify } from "react-icons/fa"; // Fixed the import to use 'FaTwitter' correctly.

export default function Footer() {
    return (
        <div className="text-center bg-gradient-to-r from-yellow-400 to-orange-500">
            {/* Social media icons and logo section */}
            <div className="flex justify-between items-center flex-wrap">
                {/* Social media icons on the left */}
                <div className="flex gap-6">
                    <a href="https://www.facebook.com" className="text-black hover:text-blue-600">
                        <FaFacebook size={30} />
                    </a>
                    <a href="https://instagram.com/" className="text-black hover:text-pink-600">
                        <FaInstagramSquare size={30} />
                    </a>
                    <a href="https://www.youtube.com/" className="text-black hover:text-red-600">
                        <FaYoutubeSquare size={30} />
                    </a>
                    <a href="https://x.com/" className="text-black hover:text-blue-400">
                        <FaTwitter size={30} />
                    </a>
                </div>

                {/* Logo on the right */}
                <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28">
                    <img 
                        src="/logo.png" 
                        alt="Logo"
                        title="Brew Bliss"
                        height={51}
                        width={51}
                        className="h-full w-full object-cover rounded"
                    />
                </div>
            </div>

            {/* Copyright Text in center */}
            <p className="text-sm text-gray-600">
                © <Link href="https://www.linkedin.com/in/majid-ali-b44661230/" className="text-blue-500 hover:underline">Brew Bliss</Link> 2024 By Majid Ali. All rights reserved.
            </p>
        </div>
    );
}
