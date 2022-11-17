import React from 'react'
import styles ,{layout} from '../style'
import Button from './Button'
import { features } from "../constants";
import { apple, bill, google } from "../assets";
const Billing = () => {
  return (
    <section className=' flex items-start justify-between mt-[100px] gap-[70px] ss:flex-col sm:flex-col md:flex-col lg:flex-row flex-col ' >
        <div className="cards flex flex-col gap-3  flex-1">
            <img src={bill} alt="" />
            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        </div>
        <div className='content flex ss:items-start sm:items-start items-center justify-center gap-8 flex-col flex-1 mt-16'>
            <h1 className='dark:text-black text-slate-50 text-[45px] font-bold'> Find a better card deal
                <br className="sm:block hidden" />  
                in few easy steps.
            </h1>
            <p className={`${styles.paragraph}`}> Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
            <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
        </div>
        </div>
    </section>
  )
}

export default Billing