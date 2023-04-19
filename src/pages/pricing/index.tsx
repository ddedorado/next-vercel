
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'

export default function PricingPage() {
  return (
    <MainLayout>
      <h1 className="text-2xl mb-4">Pricing Page</h1>
      <h2 className="text-xl mb-4">Ir a <Link className="text-blue-600/100 hover:text-blue-600/75"  href='/'>Home</Link></h2>
      <p className="left-0 top-0 flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">src/pages/pricing/index.tsx</code>
      </p>
    </MainLayout>
  )
}
