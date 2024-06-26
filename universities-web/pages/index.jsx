import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <Image src="/images/shift-logo.png" alt="Shift Logo" width={100} height={100} className="mb-4" />
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-primary text-center">Assignment for Redbrick</h1>
      <Link href="/search"
        className="mt-4 inline-block px-4 py-2 text-base md:text-lg font-semibold text-white bg-primary hover:bg-primary-dark rounded-xl">
          Go to Search
       
      </Link>
    </div>
  );
}

