import { useState } from 'react'
import './App.css'
import styles from './style'
import { Navbar, Hero,Stats,Business,Billing,CardDeal,Testimonials,Clients ,Cta ,Footer} from './components'

function App() {
  const [count, setCount] = useState(0)
  //const [darkMode, setDarkMode]=useState(false)
  return (
    <div className={`App bg-black w-full overflow-hidden `}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} dark:bg-black bg-white`}>
          <Navbar/>
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
  )
}

export default App
