import { useState } from 'react'
import './App.css'
import styles from './style'
import { Navbar, Hero,Stats,Business,Billing,CardDeal,Testimonials,Clients ,Cta ,Footer} from './components'

function App() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode]=useState(false)
  const darkHandler=()=>{
    setDarkMode(!darkMode)
  }
  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
    <div className={`App  w-full overflow-hidden dark:bg-white first-letter: `}>
      <div className={`${styles.paddingX} ${styles.flexCenter}  bg-black`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar setdark={darkHandler}/>
        </div>
      </div>

    <div className={`${styles.flexStart}  pl-10  dark:text-black`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={`${styles.flexStart} ${styles.paddingX} `}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <Cta />
        <Footer />
      </div>
    </div>
    </div>
    </div>
  )
}

export default App
