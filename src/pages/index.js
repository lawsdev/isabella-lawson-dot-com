import * as React from "react"
// can you import these as an array from @components?
import Header from "../components/header"
import Fold from "../components/fold"
import About from "../components/about"
import Workedu from "../components/workedu"
import Projects from "../components/projects"
import * as mainStyles from "../components/main.module.css"


const IndexPage = () => {
  return (
    <div>
      <Header pageTitle="works"  />
      <Fold />
      <About />
      <Workedu />
      <Projects />
      <div id="gotcha" className={`${mainStyles.inProgress} ${mainStyles.contentWidth}`}>coming soon!</div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
