import * as React from 'react'
//css module import
import * as styles from './workedu.module.css'
import * as mainStyles from './main.module.css'

const Workedu = () => {
    return (
        <div id="workedu"> 
            <div className={`${styles.workeduBox} ${mainStyles.contentWidth}`}>
            <div className={styles.workeduNav}>
                <p>Code Lou</p>
                <p>UofL</p>
                <p>Vismark</p>
            </div>
            <div className={styles.workeduTxt}>UofL is great!</div>
            </div>
        </div>
    )
}
  
export default Workedu