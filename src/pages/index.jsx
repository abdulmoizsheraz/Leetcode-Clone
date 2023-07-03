
import Problems from '@/components/Problems'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <main>
<div className='  head  Home mt-12 flex justify-center  flex-col items-center h-1/2'>
      <h1 className=' text-center mb-16 text-5xl font-bold text-gray-200'>Ace your Next Coding Interview!</h1>
<Problems/>

</div>
    </main>
  )
}
