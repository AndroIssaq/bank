import React from 'react'
import styles ,{layout} from '../style'
import Button from './Button'
import { features } from "../constants";
import { card} from "../assets";
import { motion } from 'framer-motion';
import { useScroll } from 'framer-motion';

const CardDeal = () => {
  return (
    <section className=' flex items-start justify-between mt-[100px] gap-[70px] ss:flex-col sm:flex-col md:flex-col lg:flex-row flex-col  overflow-hidden' >
        <div className='content flex ss:items-start sm:items-start items-center justify-center gap-8 flex-col flex-1 mt-16'>
            <motion.h1 initial= {{y:"300px" ,opacity:0 }}
            whileInView={{ y:0  , opacity:1}}
            transition={{ ease:'easeIn' , bounce: .7 , delay:'.5' ,type: 'spring' }} className=' text-slate-50 text-[45px] font-bold'> Easily control your
                <br className="sm:block hidden" />  
                billing & invoicing
            </motion.h1>
            <p  
            className={`${styles.paragraph}`}> Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
            <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <Button />
            </div>
        </div>

        <motion.div 
            initial= {{y:"300px" ,opacity:0 }}
            whileInView={{ y:0  , opacity:1}}
            transition={{ ease:'easeIn' , bounce: .7 , delay:'.5' ,type: 'spring' }}
            className="cards flex flex-col gap-3  flex-1">
            <img src={card} alt="" />
            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        </motion.div>
    </section>
  )
}

export default CardDeal