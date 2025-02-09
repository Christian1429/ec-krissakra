import Link from 'next/link';

export const navbarLinks = [
  {
    id: 0,
    name: 'Hem',
    href: '/',
  },
  {
    id: 1,
    name: 'Alla produkter',
    href: '/products/all',
  },
  {
    id: 2,
    name: 'Vattenfilter',
    href: '/products/all',
  },
  {
    id: 3,
    name: 'Skydd',
    href: '/products/all',
  },
];

export function NavbarLinks() {
  return (
    <div className="hidden md:flex justify-center gap-x-4 items-center ml-8">
      {navbarLinks.map((item) => (
        <Link href={item.href} key={item.id} className="font-medium">
          {item.name}
        </Link>
      ))}
    </div>
  );
}
