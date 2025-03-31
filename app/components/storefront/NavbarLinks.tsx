"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

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
  const location = usePathname();
  return (
    <div className="hidden md:flex justify-center gap-x-2 items-center ml-8">
      {navbarLinks.map((item) => (
        <Link href={item.href} key={item.id} className={cn(location === item.href ? 'bg-muted':"hover:bg-muted hover:bg-opacity-75", "group p-2 font-medium rounded-md")}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
