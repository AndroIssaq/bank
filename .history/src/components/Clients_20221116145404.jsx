import React from 'react'
import { coinbase , dropbox , airbnb , binance } from '../assets'
const Clients = () => {
  return (
    <section className=' mt-[100px]'>
        <div className="imgs flex items-center justify-center gap-[50px]">
          <img className=' w-[200px]' src={coinbase} alt="" />
          <img  className=' w-[200px]' src={dropbox} alt="" />
          <img className=' w-[100px]' src={airbnb} alt="" />
          <img className=' w-[100px]' src={binance} alt="" />
        </div>
    </section>
  )
}

export default Clients