import { lazy } from 'react'
import Head from 'next/head'
import NavbarComp from '@/components/Navbar/NavbarComp'
import CarouselComp from '../components/Carosel/Carousel'
import FeaturedBrands from '@/components/FeaturedBrands/FeaturedBrands'
const MenOffers = lazy(() => import("../components/MensOffer/MensOffer.js"))
const WomensOffer = lazy(() => import("../components/WomensOffer/WomensOffers.jsx"))

export default function Home() {
  return (
    <>
      <Head>
        <title>Wow Coupons</title>
        <meta name="description" content="Wow Coupons" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavbarComp />
        <CarouselComp />
        <WomensOffer />
        <WomensOffer />
        <MenOffers />
        <MenOffers />
        <MenOffers />
        <FeaturedBrands />
      </div>
    </>
  )
}
