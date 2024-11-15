import Link from 'next/link';
import Navbar from '../components/Navbar/page';
import Footer from '../components/Footer/page';

export default function ThankYou() {
    return (
        <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-blue-50 ">
        <h1 className="text-4xl font-bold text-blue-600">
          Thank you for shopping!!!
        </h1>
        <p className="mt-2 text-gray-700">
          Your order will be delivered in 3 Business days
        </p>
       
      </div>
      <Footer />
        </div>
    );
  }
  