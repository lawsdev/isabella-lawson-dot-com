import * as React from "react"

import Auxlayout from "../components/auxiliary/auxiliary"
import * as mainStyles from "../components/main.module.css"
import * as styles from "../components/auxiliary/auxiliary.module.css"

const BlogPage = () => {
    return (
      <div className={styles.auxpageContainer}>
        <Auxlayout />
      </div>
    )
}
  
export default BlogPage
  
export const Head = () => <title>Blog</title>