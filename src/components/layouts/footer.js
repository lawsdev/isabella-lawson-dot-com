import * as React from 'react'
import * as styles from './footer.module.css'
import * as mainStyles from '../main.module.css'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer = () => {
  const current = new Date();
  const date = `${current.getFullYear()}`;
    return (
      <footer>
        <div className={mainStyles.contentWidth}>
          <div className={styles.footbox}>
            <div className={styles.email}><a href="mailto:hello@isabellalawson.com">hello@isabellalawson.com</a></div>
            <div className={styles.signature}>Made by Isabella Lawson in {date}<a href="https://github.com/lawsdev/isabella-lawson-dot-com"><GitHubIcon /></a></div>
          </div>
        </div>
      </footer>
    )
}
  
export default Footer