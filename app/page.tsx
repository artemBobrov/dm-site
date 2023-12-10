// import Image from 'next/image'

import ThreeGuys from "./(components)/(home)/3guysSections"
import HeroSection from "./(components)/(home)/heroSection"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <ThreeGuys />
    </main>
  )
}
