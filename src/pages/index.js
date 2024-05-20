
import GlobalLayout from '../components/layouts/GlobalLayout'
import Hero from '../components/widgets/Hero'
import PopularDestinations from '../components/widgets/PopularDestnations'
import WhyChoice from '../components/widgets/WhyChoice'


export default function Home() {
  return (
    <GlobalLayout>
      <Hero />
      <WhyChoice />
      <PopularDestinations />
    </GlobalLayout>
  )
}
