import siteMetadata from '@/data/siteMetadata';
import headerNavLinks from '@/data/headerNavLinks';

import Link from '@/components/links/Link';
import Section from './Section';
import Footer from './Footer';
import MobileNav from './MobileNav';
import ThemeSwitch from '@/components/ThemeSwitch';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Section>
      <div className=''>
        <header className='flex items-center justify-between py-10'>
          <div className=''>
            <Link href='/' aria-label='Annie Nail Spa'>
              <div className='flex items-center justify-between'>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className='font-semibold h-6 hidden text-2xl sm:block'>
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className='flex items-center leading-5'>
            <div className='hidden sm:block'>
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className='font-medium p-1  sm:p-4 '
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className=''>{children}</main>
        <Footer />
      </div>
    </Section>
  );
};

export default Layout;
