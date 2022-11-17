import {useState}from 'react'
import {close,logo,menu}from '../assets'
import { navLinks } from '../constants/index';
import {BsFillMoonStarsFill , BsFillBrightnessHighFill} from  "react-icons/bs";
const Navbar = ({setDarkMode}) => {
    const [toggle, settoggle] = useState(false)
    
  return (
    <div className={``}>
    <nav className={ `flex w-full items-center justify-between py-6  `} >
        <img src={logo} alt="" className='w-[124px] h-[32]'/>
        <ul className=' items-center justify-center  gap-14    sm:flex  hidden'>
            {navLinks.map((link)=>{
                return (
                    <li key={link.id}>
                        <a className=' text-slate-100  hover:text-cyan-500 transition duration-300' href={`#${link.id}`}>{link.title}</a>
                    </li>
                )
            })}
            <button className=' text-[30px] text-white'>  <BsFillBrightnessHighFill /></button>
        </ul>
        
        <div className="mobile-nav sm:hidden w-20 h-5 cursor-pointer  ">
            <img className=' w-full h-full' src={toggle ? close :menu} alt="menu" onClick={()=>settoggle((prev)=>!prev)} />

            <div className={`${toggle ? 'flex' : 'hidden'}  w-full rounded-b-xl sidebar  bg-primary p-5 flex gap-5 items-start flex-col absolute right-0 top-20` } >
                
                <ul className=' items-center justify-center gap-4   flex flex-col z-10 w-full '>
                    {navLinks.map((link,index)=>{
                        return (
                            <li key={link.id} className={`${index!=navLinks.length-1? 'border-b' : ' border-b-0'} w-full pb-5 border-cyan-500`}>
                                <a className=' text-slate-100  hover:text-cyan-500 transition duration-300' href={`#${link.id}`}>{link.title}</a>
                            </li>
                        )
            })}
                </ul>

              
            </div>
        </div>

    </nav>
    </div>
  )
}

export default Navbar