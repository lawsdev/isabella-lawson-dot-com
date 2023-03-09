import * as React from 'react'
import * as styles from './header.module.css'
import * as mainStyles from './main.module.css'

const Header = () => {

    return (
      <header>
        <div className={mainStyles.contentWidth}>
          <div>
            <h1>Isabella Lawson</h1>
            <p>gcgen</p>
          </div>
          <nav>
            <a href="#about">abt</a><a href="#workedu">work</a><a href="#projects">projects</a> <a href="#gotcha">blog docs contact</a>
          </nav>
        </div>
      </header>
    )
}
  
export default Header