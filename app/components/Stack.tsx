import React from 'react'
import Image from 'next/image'
export default function Stack() {
  return (
    <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
      <div className="flex items-center gap-5">
        <div className="w-20 relative h-20">
          <Image src="/next.svg" alt="Next.js Logo" fill priority />
        </div>
        <p className="font-semibold text-2xl z-10">+</p>
        <div className="w-16 relative h-16">
          <Image src="/tw.svg" alt="Next.js Logo" fill priority />
        </div>
        <p className="font-semibold text-2xl z-10">+</p>
        <div className="w-16 relative h-16">
          <Image src="/prisma.svg" alt="Next.js Logo" fill priority />
        </div>
      </div>
    </div>
  )
}
