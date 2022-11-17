import React from 'react'
import styles from '../style'
const Cta = () => {
  return (
    <section className='flex items-center justify-between w-full mt-[100px] bg-black-gradient p-[40px] rounded-xl'>
        <div className="left flex-1 flex flex-col gap-4">
            <h1 className=' xs:text-[48px] text-[40px] text-slate-50 font-bold'>Let’s try our service now!</h1>
            <p className={styles.paragraph}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className="right flex-1">
        
        </div>
    </section>
  )
}

export default Cta