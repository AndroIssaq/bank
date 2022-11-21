import styles ,{layout} from '../style'
import Button from './Button'
import { features } from "../constants";
import { motion} from 'framer-motion';
import { useAnimation } from "framer-motion"
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
const Business = () => {
    const { ref, inView, entry } = useInView();
    const animation1=useAnimation()
    const animation2=useAnimation()
    const animation3=useAnimation()
    const animation4=useAnimation()

    useEffect(()=>{
        if(inView){
            animation1.start({
                y:0 , 
                opacity:1,
                transition:{
                    ease:'easeIn', 
                    bounce: .7 ,
                    delay:'.5',
                    type: 'spring'
                }
            })
        }
        if(!inView){
            animation1.start({
                y:"650px" , 
                opacity:0,
            })
        }
    },[inView])

    useEffect(()=>{
        if(inView){
            animation2.start({
                y:0 , 
                opacity:1,
                transition:{
                    ease:'easeIn', 
                    bounce: .7 ,
                    delay:'.5',
                    type: 'spring'
                }
            })
        }

        if(!inView){
            animation2.start({
                y:"650px" , 
                opacity:0,
            })
        }
    },[inView])
  return (
    <section ref={ref} className=' flex items-start justify-between mt-[100px] gap-[100px] ss:flex-col sm:flex-col md:flex-col lg:flex-row flex-col  ' >
        <motion.div  
            animate={animation1}
            className='content flex ss:items-start sm:items-start items-center justify-center gap-8 flex-col flex-1 mt-9'>
            <h1 className=' text-slate-50 text-[45px] font-bold dark:text-black'
            > You do the business, <br className="sm:block hidden" />  we well handle
                the money.
            </h1>
            <p className={`${styles.paragraph} dark:text-black`}> With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.</p>
            <Button />
        </motion.div>

        <motion.div  
            animate
        className="cards flex flex-col gap-3  flex-1">
            {features.map(feature=>{
                return (
                    <div 
                    className="card dark:text-black flex items-center gap-[20px] feature-card p-6 rounded-xl transition duration-500">
                        <div>
                            <div className="image w-[64px] dark:text-black h-[64px] rounded-[50%] bg-dimBlue flex items-center justify-center"><img src={feature.icon} alt=""  className='w-[33px] h-[32px]'/></div>
                            </div>
                        <div className="card-content">
                            <h1 className='text-slate-50 dark:text-black text-[20px] font-bold'>{feature.title}</h1>
                            <p className={`${styles.paragraph} dark:text-black`}>{feature.content}</p>
                        </div>
                    </div>
                )
            })}
        </motion.div>
    </section>
)
}

export default Business