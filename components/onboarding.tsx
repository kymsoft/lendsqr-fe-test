import { images } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Onboarding = () => {
  return (
    <div className='onboarding-details'>
      <div className='logo'>
        <Image
          src={images.logo}
          alt="logo"
          width={144.8}
          height={30}
        />
      </div>
      <div className='pablo'>
        <Image
          src={images.pablo}
          alt="onboarding-image"
          width={600}
          height={337.57}
          className='onboarding-image'
        />
      </div>
    </div>
  )
}

export default Onboarding