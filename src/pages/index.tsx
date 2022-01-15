import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Link from '@/components/links/Link';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

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
          <div className='flex flex-col items-center justify-center layout min-h-screen text-center'>
            <h1 className='text-5xl'>Annie Nails Spa</h1>
            <p className='mt-2 text-xl text-gray-800 dark:text-gray-200'>
              Professional Nail care
            </p>
            <p className='mt-2 text-gray-700 text-sm'></p>

            <Link
              className='bg-gray-100 border border-gray-400 mt-6 p-4 rounded-md dark:bg-gray-700'
              href='https://anniesnailsspa6482.setmore.com/'
            >
              Book Appointment
            </Link>

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
