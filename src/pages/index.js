import { lazy } from 'react'
import Head from 'next/head'
const NavbarComp = lazy(() => import('@/components/Navbar/NavbarComp'))
import CarouselComp from "@/components/Carosel/Carousel"
const FeaturedBrands = lazy(() => import("@/components/FeaturedBrands/FeaturedBrands"))
const Footer = lazy(() => import('@/components/Footer/Footer'))
const MenOffers = lazy(() => import("../components/MensOffer/MensOffer.js"))
const WomensOffer = lazy(() => import("../components/WomensOffer/WomensOffers.jsx"))

export default function Home() {
  return (
    <>
      <Head>
        <title>APK Mods</title>
        <meta name="description" content="Wow Coupons" />
        <meta name="google-site-verification" content="ajyfXdiEBoYMdu6TbRw0hVlY6VrQVDiyWQfRgJVZEaU" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavbarComp />
        <CarouselComp />
        <WomensOffer />
        <MenOffers />
        <WomensOffer />
        <MenOffers />
        <FeaturedBrands />
        <Footer />
      </div>
    </>
  )
}
