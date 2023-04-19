import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'
import { ReactNode } from 'react'

export default function AboutPage() {
  return (
      <>
        <h1 className='text-2xl mb-4'>About Page</h1>

        <h2 className='text-xl mb-4'>Ir a <Link className="text-blue-600/100 hover:text-blue-600/75" href='/'>Home</Link></h2>

        <p className="left-0 top-0 flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="font-mono font-bold">src/pages/about.tsx</code>
        </p>
      </>
  )
}

AboutPage.getLayout = function getLayout( page: ReactNode ) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}