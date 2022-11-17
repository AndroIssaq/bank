import React from 'react'
import { stats } from '../constants'

const Stats = () => {
  return (
    <div className='w-full flex  items-start ss:items-center sm:items-center justify-start sm:justify-between ss:justify-between text-slate-50 px-[40px]  sm:px-[50px] ss:px[50px] flex-wrap gap-5' >
    {stats.map((state)=>{
        return (
            <div className="content flex items-center  gap-3 justify-center " key={state.id}>
                <h1 className=' text-[30px] sm:text-[45px] ss:text-[45px] font-bold dark:text-black'>{state.value}</h1>
                <p className='text-[18px] sm:text-[22px] ss:text-[22px] text-gradient pt-1'>{ state.title}</p>
            </div>
        )
    })
    }
   </div>
  )
}

export default Stats