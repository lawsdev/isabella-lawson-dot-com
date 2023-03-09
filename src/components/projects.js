import * as React from 'react'
//css module import
import * as styles from './projects.module.css'
import * as mainStyles from './main.module.css'

const Projects = () => {
    return (
        <div id="projects">
            <div className={`${styles.projectsBox} ${mainStyles.contentWidth}`}>
            <div className={styles.projectText}>
                <p>I have made many projects including this one.</p>
            </div>
            <div className={styles.projectImageBox}>
            <img src="https://imgs.search.brave.com/6tEs_K1jtpx-7jCRBeg2uHdVLrBqCJuiDkkQd_ry1So/rs:fit:474:316:1/g:ce/aHR0cHM6Ly9hc2ts/ZW8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDEwLzEyL2Rl/c2t0b3BfY29tcHV0/ZXIuanBn"/>
            <a href="https://myupdatestar.com/computers-what-to-know-when-purchasing-a-new-machine/">Link -></a>
            </div>
            </div>
        </div>
    )
}

export default Projects 