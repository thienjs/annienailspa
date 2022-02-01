import React from 'react';
import { Link } from '@/components/common/links';
import { IconLink } from '../iconlink';
import { FiGithub, FiInstagram, FiTwitter, FiMail, FiFacebook } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id='hero' className='pt-8 md:pt-32'>
      <div className='max-w-7xl mx-auto'>
        <div className='font-black gap-5 grid grid-cols-12'>
          <div className='col-end-12 col-start-1 lg:col-end-10'>
            <h1 className='font-bold text-5xl text-gray-800 tracking-tighter md:mb-3 md:text-7xl dark:text-white'>
              Annie Nails Spa
            </h1>
          </div>
        </div>
        <p className='max-w-3xl mt-10 text-gray-600 dark:text-gray-400'>
 
          <Link href='https://anniesnailsspa6482.setmore.com'>Book Appointment</Link>.
        </p>
        <div className='flex items-center mt-5 space-x-4'>
          <IconLink
            className='text-blue-600 dark:hover:bg-blue-800 dark:text-blue-400 hover:bg-blue-200'
            href='https://twitter.com/'
          >
            <FiTwitter className='h-5 w-5' />
          </IconLink>
          <IconLink
            className='text-gray-600 dark:hover:bg-gray-800 dark:text-gray-400 hover:bg-gray-200'
            href='https://facebook.com/'
          >
            <FiFacebook className='h-5 w-5' />
          </IconLink>
          <IconLink
            className='text-red-600 dark:hover:bg-red-800 dark:text-red-400 hover:bg-red-200'
            href='https://www.instagram.com/annienailsct/'
          >
            <FiInstagram className='h-5 w-5' />
          </IconLink>

          <IconLink
            className='text-yellow-600 dark:hover:bg-yellow-800 dark:text-yellow-400 hover:bg-yellow-200'
            href='mailto:annienailsct@gmail.com'
          >
            <FiMail className='h-5 w-5' />
          </IconLink>
        </div>
      </div>
    </section>
  );
}
