import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/layout/Layout'
import useKiosk from '../../hooks/useKiosk'
import Product from '@/components/Product'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { actualCategory } = useKiosk()

  return (
    <>
      <Layout page={`Menu ${actualCategory?.name}`}>
        <h1 className='text-4xl font-black'>{actualCategory?.name}</h1>
        <p className='text-2xl my-10'>Choose and customize your order below</p>
        <div className='grid gap-4 grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4'>
          {actualCategory?.products?.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </Layout>
    </>
  )
}
