import React from 'react'
import { coinbase , dropbox , airbnb , binance } from '../assets'
const Clients = () => {
  return (
    <section className=' mt-[100px]'>
        <div className="imgs">
            <coinbase />
            <dropbox />
            <airbnb />
            <binance />
        </div>
    </section>
  )
}

export default Clients