import styles ,{layout} from '../style'
import Button from './Button'
import { features } from "../constants";
import { motion} from 'framer-motion';
import { useScroll } from "framer-motion"
const Business = () => {
  return (
    <section className=' flex items-start justify-between mt-[100px] gap-[100px] ss:flex-col sm:flex-col md:flex-col lg:flex-row flex-col ' >
        <motion.div
            initial= {{ x:"-100%" }}  
            whileInView={{ x:0 }}
            transition={{ duration: }}
            className='content flex ss:items-start sm:items-start items-center justify-center gap-8 flex-col flex-1 mt-9'>
      
            <h1 className=' text-slate-50 text-[45px] font-bold'
           
            > You do the business, <br className="sm:block hidden" />  we well handle
                the money.
            </h1>
            <p className={`${styles.paragraph}`}> With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.</p>
            <Button />
        </motion.div>

        <motion.div  
            initial= {{ x:"700px" }}  
            whileInView={{ x:0 }}
        className="cards flex flex-col gap-3  flex-1">
            {features.map(feature=>{
                return (
                    <div 
                    className="card  flex items-center gap-[20px] feature-card p-6 rounded-xl transition duration-500">
                        <div>
                            <div className="image w-[64px] h-[64px] rounded-[50%] bg-dimBlue flex items-center justify-center"><img src={feature.icon} alt=""  className='w-[33px] h-[32px]'/></div>
                            </div>
                        <div className="card-content">
                            <h1 className='text-slate-50 text-[20px] font-bold'>{feature.title}</h1>
                            <p className={`${styles.paragraph}`}>{feature.content}</p>
                        </div>
                    </div>
                )
            })}
        </motion.div>
    </section>
)
}

export default Business