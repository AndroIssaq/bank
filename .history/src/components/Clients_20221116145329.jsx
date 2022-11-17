import React from 'react'
import { coinbase , dropbox , airbnb , binance } from '../assets'
const Clients = () => {
  return (
    <section className=' mt-[100px]'>
        <div className="imgs flex items-center justify-center gap-[50px]">
          <img className='wi' src={coinbase} alt="" />
          <img src={dropbox} alt="" />
          <img src={airbnb} alt="" />
          <img src={binance} alt="" />
        </div>
    </section>
  )
}

export default Clients