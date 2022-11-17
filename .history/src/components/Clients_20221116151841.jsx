import React from 'react'
import { coinbase , dropbox , airbnb , binance } from '../assets'
const Clients = () => {
  return (
    <section className=' mt-[50px] '>
        <div className="imgs flex items-center justify-center gap-[100px] flex-wrap">
          <img className=' sm:w-[220px] xs:w-[220px] w-[150px]' src={coinbase} alt="" />
          <img  className=' sm:w-[220px] xs:w-[220px] w-[150px]' src={dropbox} alt="" />
          <img className=' sm:w-[220px] xs:w-[220px] w-[150px]' src={airbnb} alt="" />
          <img className=' w-[220px]' src={binance} alt="" />
        </div>
    </section>
  )
}

export default Clients