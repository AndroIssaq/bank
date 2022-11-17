import React from 'react'
import styles from '../style'
const Cta = () => {
  return (
    <section className='flex items-center justify-between w-full mt-[100px] bg-black-g'>
        <div className="left flex-1">
            <h1 className=' xs:text-[48px] text-[40px] text-slate-50'>Let’s try our service now!</h1>
            <p className={styles.paragraph}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className="right flex-1">

        </div>
    </section>
  )
}

export default Cta