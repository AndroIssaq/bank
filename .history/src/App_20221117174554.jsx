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
    <div className={}>
    <div className={`App  w-full overflow-hidden bg-black ${darkMode ? 'dark' : ''}`}>
      <div className={`${styles.paddingX} ${styles.flexCenter} dark:bg-white bg-black`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar setdark={darkHandler}/>
        </div>
      </div>

    <div className={`${styles.flexStart}  pl-10 `}>
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
