// import Image from 'next/image'

import HeroText from "./(components)/(home)/heroText"
import HeroVideo from "./(components)/(home)/video"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroVideo />
      <HeroText />
    </main>
  )
}
