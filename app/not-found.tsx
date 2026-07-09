import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Shivansh Giri",
  description: "The page you are looking for could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
        404
      </h1>
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/"
        className="py-3 px-8 button-primary text-center text-white cursor-pointer rounded-lg text-lg font-semibold"
      >
        Go back home
      </Link>
    </div>
  );
}
