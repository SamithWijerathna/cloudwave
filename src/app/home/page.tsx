import React from 'react';
import { Metadata } from 'next';
import HomeFourMain from '@/pages/home/home';

export const metadata: Metadata = {
  title: "Cloudwave ®",
};

const HomePageFour = () => {
  return (
    <HomeFourMain/>
  );
};

export default HomePageFour;