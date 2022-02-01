import * as React from 'react';
import { Navbar } from '@/components/common/nav';
import Head from 'next/head';
import { useRouter } from 'next/router';
export interface ILayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
}

export function Layout({ children, ...customMeta }: ILayoutProps) {
  const router = useRouter();
  const meta = {
    title: 'Annie Nails Spa',
    description: `Annie Nails Spa`,
    image: '',
    type: 'website',
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://annienailspa.com${router.asPath}`}
        />
        <link
          rel='canonical'
          href={`https://annienailspa.com${router.asPath}`}
        />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Annie Nails Spa' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@leeerob' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
      </Head>
      <Navbar />
      <main className='dark:bg-zinc-800 bg-gray-50 flex flex-col justify-center mb-8 px-8 '>
        {children}
      </main>
    </>
  );
}

export default Layout;
