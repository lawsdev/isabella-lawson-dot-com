import * as React from "react"

import Footer from "../components/layouts/footer"
import Auxlayout from "../components/auxiliary/auxiliary"
import * as mainStyles from "../components/main.module.css"
import * as styles from "../components/auxiliary/auxiliary.module.css"

const AuxiliaryPage = () => {
    return (
      <div className={styles.auxpageContainer}>
        <Auxlayout />
      </div>
    )
}
  
export default AuxiliaryPage
  
export const Head = () => <title>Home Page</title>