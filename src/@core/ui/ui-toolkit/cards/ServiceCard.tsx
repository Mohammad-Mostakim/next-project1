
import React from 'react'
import { Card, CardParagraph, Circle, Overlay } from './serviceCardStyle'
import Image from 'next/image'

type serviceCard={
  serviceName:string,
  serviceImageUrl:string
}
export default function ServiceCard({serviceName,serviceImageUrl}:serviceCard) {
  return (
    <Card >
      <Overlay className='overlay' />
      <Circle className='circle'>
        <Image height={131} width={131} alt='card' src="/service.jpg"/>
      </Circle>
      <CardParagraph>{serviceName}</CardParagraph>
    </Card>
  )
}
