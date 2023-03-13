import * as React from 'react'
//css module import
import * as styles from './fold.module.css'
import * as mainStyles from '../main.module.css'

const Fold = () => {
    return (
        // example of using two css module classes <div className={`${styles.green} ${mainStyles.contentWidth}`}>
        <div className={styles.foldContainer}> 
            <div className={mainStyles.contentWidth}>
            <p>Hello! welcome to my portfolio website. I’m Isabella Lawson, a web developer specializing in React. I like the intersection of color schemes and coding.</p>
            </div>
        </div>
    )
}
  
export default Fold