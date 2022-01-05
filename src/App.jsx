import { useState } from 'react'

import { scaleDown as Menu } from 'react-burger-menu';
function App() {
  

  return (
    <div id="App">
      
      
                <Menu pageWrapId={ "page-wrap" } outerContainerId={ "App" }>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                    <a className="menu-item--small" href="">Settings</a>
                </Menu>
                <div id="page-wrap">
                    <h2>Dereck</h2>
                </div>
          
    </div>
  )
}

export default App
