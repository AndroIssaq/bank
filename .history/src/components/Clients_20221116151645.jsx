import React from 'react'
import { coinbase , dropbox , airbnb , binance } from '../assets'
const Clients = () => {
  return (
    <section className=' mt-[50px]'>
        <div className="imgs flex items-center justify-center gap-[100px]">
          <img className=' sm:w-[220px] xs:w-[220px] ' src={coinbase} alt="" />
          <img  className=' w-[220px]' src={dropbox} alt="" />
          <img className=' w-[220px]' src={airbnb} alt="" />
          <img className=' w-[220px]' src={binance} alt="" />
        </div>
    </section>
  )
}

export default Clients