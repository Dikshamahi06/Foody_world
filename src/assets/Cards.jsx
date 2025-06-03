import React from 'react'
import './cards.css'
export const Cards = ({src,alt,width,height}) => {
  return (
    <img src={src} alt={alt} width={width} height={height} />
  )
}
