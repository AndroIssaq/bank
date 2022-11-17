import React from 'react'
import styles ,{layout} from '../style'
import Button from './Button'
import { features } from "../constants";
import { card} from "../assets";
import 

const CardDeal = () => {
  return (
    <section className=' flex items-start justify-between mt-[100px] gap-[70px] ss:flex-col sm:flex-col md:flex-col lg:flex-row flex-col ' >
        <div 

          className='content flex ss:items-start sm:items-start items-center justify-center gap-8 flex-col flex-1 mt-16'>
            <h1 className=' text-slate-50 text-[45px] font-bold'> Easily control your
                <br className="sm:block hidden" />  
                billing & invoicing
            </h1>
            <p className={`${styles.paragraph}`}> Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
            <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <Button />
            </div>
        </div>
        <div className="cards flex flex-col gap-3  flex-1">
            <img src={card} alt="" />
            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        </div>
    </section>
  )
}

export default CardDeal