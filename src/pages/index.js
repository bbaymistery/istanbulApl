
import { useEffect, useState } from 'react';
import GlobalLayout from '../components/layouts/GlobalLayout'
import Hero from '../components/widgets/Hero'
import PopularDestinations from '../components/widgets/PopularDestnations'
import WhyChoice from '../components/widgets/WhyChoice'
import CarsSlider from "../components/widgets/CarsSlider/FunctionComp";


export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    // Check if window scroll position is more than 200 pixels
    if (window.scrollY > 210 && !hasScrolled) {
      setHasScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);
  return (
    <GlobalLayout>
      <Hero />
      <WhyChoice />
      <PopularDestinations />
      {hasScrolled && <CarsSlider />}
    </GlobalLayout>
  )
}
