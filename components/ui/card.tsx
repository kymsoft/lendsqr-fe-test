import { images } from '@/constants';
import Image from 'next/image';
import React, { FC } from 'react'

interface CardProps{
    label: string;
    icon: keyof typeof images;
    value: string;
    color: string;
}

const Card: FC<CardProps> = ({
    label,
    value,
    icon,
    color
}) => {
  return (
    <div className='card'>
        <div className='card-icon' style={{backgroundColor: color}}>
            <Image
              src={icon}
              alt='card icon'
              width={22}
              height={22}
            />
        </div>
        <p className='card-label'>{label}</p>
        <p className='card-value'>{value}</p>
    </div>
  )
}

export default Card