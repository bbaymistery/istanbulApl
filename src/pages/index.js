
import { useEffect, useState } from 'react';
import GlobalLayout from '../components/layouts/GlobalLayout'
import Hero from '../components/widgets/Hero'
import PopularDestinations from '../components/widgets/PopularDestnations'
import WhyChoice from '../components/widgets/WhyChoice'
import dynamic from 'next/dynamic';
import Tours from './tours';
const Testimonials = dynamic(() => import('../components/widgets/Testimonials'),);
const CarsSlider = dynamic(() => import('../components/widgets/CarsSlider'),);

export default function Home(props) {
  const [hasScrolled, setHasScrolled] = useState(false);

  // Check if window scroll position is more than 200 pixels
  const handleScroll = () => {
    if (window.scrollY > 210 && !hasScrolled) setHasScrolled(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  return (
    <GlobalLayout>
      <Hero env={props.env} />
      <WhyChoice />
      <PopularDestinations />
      <Tours />
      {hasScrolled && <CarsSlider />}
      <Testimonials />

    </GlobalLayout>
  )
}
