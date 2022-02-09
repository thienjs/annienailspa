import React from 'react';
import Layout from '@/components/layout/Layout';

export default function PricesPage() {
  return (
    <Layout>
      <div className='text-3xl'>Prices</div>
      <ul>
        <li className='flex justify-between'>
          <span>Classic Manicure</span>
          <span className='mr-8'>$17</span>
        </li>
        <li className='flex justify-between'>
          <span>Classic Pedicure</span>
          <span className='mr-8'>$30</span>
        </li>
        <li className='flex justify-between'>
          <span>Classic Pedi & Dip Combo</span>
          <span className='mr-8'>$45</span>
        </li>
        <li className='flex justify-between'>
          <span>Pedicure</span>
          <span className='mr-8'>$30</span>
        </li>
        <li className='flex justify-between'>
          <span>Dip Powder</span>
          <span className='mr-8'>$38</span>
        </li>
        <li className='flex justify-between'>
          <span>Dip Powder w/ French</span>
          <span className='mr-8'>$43</span>
        </li>
        <li className='flex justify-between'>
          <span>Eyebrows</span>
          <span className='mr-8'>$10</span>
        </li>
        <li className='flex justify-between'>
          <span>Acrylic Full Set</span>
          <span className='mr-8'>$40</span>
        </li>
   
        <li className='flex justify-between'>
          <span>Gel Full Set</span>
          <span className='mr-8'>$45</span>
        </li>
        <li className='flex justify-between'>
          <span>Gel Color Add On</span>
          <span className='mr-8'>$10</span>
        </li>
        <li className='flex justify-between'>
          <span>Refill w/ Gel Color</span>
          <span className='mr-8'>$40</span>
        </li>
        <li className='flex justify-between'>
          <span>Gel Pedicure</span>
          <span className='mr-8'>$40</span>
        </li>
        <li className='flex justify-between'>
          <span>Deluxe Pedicure</span>
          <span className='mr-8'>$40</span>
        </li>
        <li className='flex justify-between'>
          <span>Acrylic Refill w/ Gel Color</span>
          <span className='mr-8'>$37</span>
        </li>
        <li className='flex justify-between'>
          <span>Toe Polish Change</span>
          <span className='mr-8'>$15</span>
        </li>
      </ul>
    </Layout>
  );
}
