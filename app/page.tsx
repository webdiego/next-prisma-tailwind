import { Metadata } from 'next'
import Image from 'next/image'
import Hero from './components/Hero'
import Stack from './components/Stack'
import { prisma } from '../prisma/prisma.client'
export const metadata: Metadata = {
  title: 'My Page Title',
}

export default function Page() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center`}>
      <Hero />
      <Stack />
    </main>
  )
}
