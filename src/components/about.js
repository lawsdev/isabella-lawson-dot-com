import * as React from 'react'
//css module import
import * as styles from './about.module.css'
import * as mainStyles from './main.module.css'

const About = () => {
    return (
        <div id="about"> 
            <div className={`${styles.abtBox} ${mainStyles.contentWidth}`}>
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"/>
            <p className={styles.abtTxt}>I'm Isabella! I am a web developer excited to practice with a modern team.</p>
            </div>
        </div>
    )
}
  
export default About