import Image from 'next/image'
import Hero from '../components/Hero'
import Stack from '../components/Stack'
import { prisma } from '../../prisma/prisma.client'

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center`}>
      <Hero />
      <Stack />
    </main>
  )
}
