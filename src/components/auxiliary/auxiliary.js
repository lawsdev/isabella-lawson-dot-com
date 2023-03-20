import * as React from 'react'
import Footer from '../layouts/footer'
//css module import
import * as styles from './auxiliary.module.css'
import * as mainStyles from '../main.module.css'

const Auxlayout = ({ pageTitle, children }) => {
    return (
        <div className={styles.auxpage}> 
            <div className={styles.auxbox}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}
  
export default Auxlayout