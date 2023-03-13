import * as React from 'react'
import Footer from '../layouts/footer'
//css module import
import * as styles from './auxiliary.module.css'
import * as mainStyles from '../main.module.css'

const Auxlayout = () => {
    return (
        <div className={styles.auxpageContainer}> 
            <div className={styles.auxbox}></div>
            <Footer/>
        </div>
        
    )
}
  
export default Auxlayout