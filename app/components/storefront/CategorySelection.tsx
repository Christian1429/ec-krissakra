import Image from "next/image"
import Link from "next/link";
// import all from '@/public/all.jpeg';
import vattenfilter from '@/public/vattenfilter.jpeg';
import skydd from '@/public/skydd.jpeg';  
import any from '@/public/any.jpeg';

export function CategorySelection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-extrabold tracking-tight">
          Handla via kategori
        </h2>

        <Link
          className="text-sm font-semibold text-primary hover:text-primary/80"
          href="/products/all"
        >
          Se alla produkter &rarr;
        </Link>
      </div>
      {/* first item */}
      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-w-1 sm:row-span-2">
          <Image
            src={vattenfilter}
            alt="Alla produkter" // fix
            className="object-cover object-center"
          />
          <div className="bg-gradient-to-b from-transparent to-black opacity-55" />
          <div className="p-6 flex items-end">
            <Link href="/products/all">
              <h3 className="text-white font-semibold">Alla produkter</h3>
              <p className="mt-1 text-sm text-white">Köp nu</p>
            </Link>
          </div>
        </div>
        {/* second item */}
        <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:overflow-hidden sm:relative sm:aspect-ration-none sm:h-full">
          <Image
            src={skydd}
            alt="Skydd product image" // fix
            className="object-cover object-center sm:absolute sm:inset-0 sm:h-full sm:w-full"
          />
          <div className="bg-gradient-to-b from-transparent to-black opacity-55 sm:absolute sm:inset-0" />
          <div className="p-6 flex items-end sm:absolute sm:inset-0">
            <Link href="/products/all">
              <h3 className="text-white font-semibold">Överlevnads produkter</h3>
              <p className="mt-1 text-sm text-white">Köp nu</p>
            </Link>
          </div>
        </div>
        {/* third item */}
        <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:overflow-hidden sm:relative sm:aspect-ration-none sm:h-full">
          <Image
            src={any}
            alt="any product image" // fix
            className="object-cover object-center sm:absolute sm:inset-0 sm:h-full sm:w-full"
          />
          <div className="bg-gradient-to-b from-transparent to-black opacity-55 sm:absolute sm:inset-0" />
          <div className="p-6 flex items-end sm:absolute sm:inset-0">
            <Link href="/products/all">
              <h3 className="text-white font-semibold">Frystorkad mat</h3>
              <p className="mt-1 text-sm text-white">Köp nu</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}