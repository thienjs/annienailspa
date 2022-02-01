import * as React from 'react';
import Link from 'next/link';
import { NavItem } from './NavItem';
import { ThemeDropdown } from './ThemeDropdown';
import { MobileNav } from './MobileNav';
import * as Toolbar from '@radix-ui/react-toolbar';
export interface INavbarProps {}

export function Navbar(props: INavbarProps) {
  return (
    <Toolbar.Root>
      <div className='flex flex-col justify-center px-8 dark:bg-zinc-800 bg-gray-50'>
        <nav className='dark:bg-zinc-800 bg-gray-50 bg-opacity-60 border-gray-200 flex items-center justify-between max-w-7xl mx-auto pb-8 pt-8 relative text-gray-900 w-full sm:pb-16  dark:border-gray-700 dark:text-gray-100'>
          <Link passHref href='/'>
            <Toolbar.Link className='bg-gradient-to-r font-semibold from-pink-500 h-11 hidden rounded-full text-3xl to-yellow-500 via-red-500 w-11 md:block'></Toolbar.Link>
          </Link>
          <MobileNav />
          <div className='ml-[-0.60rem]'>
            <NavItem href='/' text='Home' />
            <NavItem href='/about' text='About' />
            <NavItem href='/price' text='Prices' />
            <NavItem href='/products' text='products' />
          </div>

          <ThemeDropdown />
        </nav>
      </div>
    </Toolbar.Root>
  );
}
