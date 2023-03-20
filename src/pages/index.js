import * as React from "react"
//look into using a webpack config to set up aliases
import Header from "../components/layouts/header"
import Fold from "../components/sections/fold"
import About from "../components/sections/about"
import Workedu from "../components/sections/workedu"
import Projects from "../components/sections/projects"
import Footer from "../components/layouts/footer"
import Seo from "../components/layouts/seo"
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
      <Footer />
      
    </div>
  )
}

export default IndexPage

export const Head = () => <Seo title="Isabella Lawson" />
