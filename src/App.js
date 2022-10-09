import './App.css';
import Header from './components/Header.js'
import { useState, useEffect } from 'react'
import { render } from 'react-dom'

import Goto from './components/Goto.js'

import Home from './components/Home.js'
import About from './components/About.js'
import Development from './components/Development.js'
import Contact from './components/Contact.js'
import Autors from './components/Autors.js'
import Donate from './components/Donate.js'
import Suggestion from './components/Suggestion.js'

import contact from './images/icons/contact-ic.svg'
import arrow from './images/icons/small-arrow.svg'

function App() {
  document.title = 'Nicecap'

  window.scrs_allow = true
  window.scrs_cont = true

  const [donate, setDonate] = useState(false)
  const [suggestion, setSuggestion] = useState(false)

  useEffect(() => {
    const ctn = document.getElementById('full_ctn')
    ctn.classList.toggle('on')
    if (donate) {
      render(<Donate setDonate={setDonate}/>, ctn)
    } else {
      render(null, ctn)
    }
  }, [donate])

    useEffect(() => {
    const ctn = document.getElementById('full_ctn')
    ctn.classList.toggle('on')
    if (suggestion) {
      render(<Suggestion setSuggestion={setSuggestion}/>, ctn)
    } else {
      render(null, ctn)
    }
  }, [suggestion])

  useEffect(() => {
    const main_container = document.getElementById('main_container')
    main_container.addEventListener('wheel', () => {
      window.scrs_cont = false
    })
    main_container.addEventListener('touchmove', () => {
      window.scrs_cont = false
    })
  })
  
  useEffect(() => {
    setTimeout(() => {
      const go_to = document.getElementById('go_to')
      go_to.classList.remove('on')
    }, 500)
  })

  function alternateOps() {
    if (window.scrs_allow === false) return

    const el = Array.from(document.querySelectorAll('h2')).filter((val) => {
      const top = val.getBoundingClientRect().top
      return top > -150 && top < 400
    })

    if (!el[0]) return
    
    const op = document.querySelector(`#go_to ul li[to='${el[0].id}']`)

    document.querySelectorAll('#go_to ul li').forEach((el) => el.classList.remove('on'))
    op.classList.add('on')
  }

  return (
    <main>
      <Header setDonate={setDonate} setSuggestion={setSuggestion}/>
      <div id='main_container' onScroll={alternateOps}>
        <div 
          id='contact_shortcut' 
          onClick={() => {
            const main_container = document.getElementById('main_container')

            const view_top = document.getElementById('contact').getBoundingClientRect().top
            const scroll = main_container.scrollTop
    
            main_container.scrollTop = view_top - 150 + scroll
        }}>
          <img src={contact} alt=''></img>
          <span>Contato</span>
          <img src={arrow} style={{ height: '15px' }} alt=''></img>
        </div>
        <Goto />
        <div id="full_ctn">
        </div>
        <div className='side left'>
          <Home />
          <About />
          <Development />
          <Contact />
          <Autors />
          </div>
      </div>
    </main>
  )
}

export default App;
