import Image from 'next/image'
import Link from 'next/link'

function Controls() {
    return (
      <div className='bg-my-dark-alt w-full h-[100px] lg:w-1/12 lg:h-full flex lg:flex-col justify-evenly items-center lg:justify-start lg:gap-12 lg:pt-10 2xl:pt-14 4xl:gap-16 border-t lg:border-r lg:border-t-0  border-my-yellow-secondary/20'>
          <Link href="/"><Image src="/control1.svg" width={18} height={20} className='control-logo border-b-2 border-my-yellow-secondary/50' alt="control1" /></Link>
          <Link href="/artists"><Image src="/control2.svg" width={22} height={22} className='control-logo' alt="control1" /></Link>
          <Link href="/media"><Image src="/control3.svg" width={22} height={22} className='control-logo' alt="control1" /></Link>
          <Link href="/contact"><Image src="/control4.svg" width={22} height={22} className='control-logo' alt="control1" /></Link>
      </div>
    )
  }
  
  export default Controls