import React from 'react'
import styles from '../style'
import Button from './Button'
const Cta = () => {
  return (
    <section className='flex items-center justify-between w-full mt-[100px] bg-black-gradient dark:bg-slate-600 p-[40px] rounded-xl xs:flex-row sm:flex-row flex-col gap-9'>
        <div className="left  flex flex-col gap-4">
            <h1 className=' xs:text-[48px] text-[40px]  text-slate-50 font-bold'>Let’s try our service now!</h1>
            <p className={styles.paragraph}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className="right ">
            <Button />
        </div>
    </section>
  )
}

export default Cta