import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/common/links/ArrowLink';
import { Link } from '@/components/common/links';
import UnderlineLink from '@/components/common/links/UnderlineLink';
import UnstyledLink from '@/components/common/links/UnstyledLink';
import Seo from '@/components/Seo';
import Hero from '@/components/common/hero/Hero';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className=''>
        <Hero />
          <div className='flex flex-col items-center justify-center layout min-h-screen text-center'>


            <footer className='absolute bottom-2 text-gray-700 dark:text-pink-600'>
              © {new Date().getFullYear()}{' '}
              <UnderlineLink href='/'>Annie Nails Spa</UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
