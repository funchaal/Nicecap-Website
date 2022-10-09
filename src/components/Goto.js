import arrow from '../images/icons/arrow.svg'
import scrolle from '../images/icons/navigate.png'

export default function Goto() {
    let timing = 0

    function click(e) {
        const target =  e.target
        document.querySelectorAll('#go_to ul li').forEach((el) => el.classList.remove('on'))
        target.classList.add('on')

        const go_to = document.getElementById('go_to')
        go_to.classList.remove('on')

        const main_container = document.getElementById('main_container')

        const view_top = document.getElementById(e.target.getAttribute('to')).getBoundingClientRect().top
        const scroll = main_container.scrollTop

        main_container.scrollTop = view_top - 150 + scroll
        
        clearInterval(timing)
        window.scrs_cont = true
        
        timing = setInterval(() => {
            if (window.scrs_cont === true && main_container.scrollTop !== view_top - 150 + scroll) {
                window.scrs_allow = false
            } else {
                window.scrs_allow = true
                clearInterval(timing)
            }
        })
    }
    function show() {
        const go_to = document.getElementById('go_to')
        go_to.classList.add('on')

        const func_1 = (e) => {
            const list = document.elementsFromPoint(e.clientX, e.clientY)
            const el = Array.from(list).filter(({ id }) => id == 'go_to')[0]
            if (!el) { go_to.classList.remove('on'); window.removeEventListener('mousedown', func_1) }
        }

        window.addEventListener('mousedown', func_1)
    }
    return(
        <div id="go_to" className='on'>
            <button onClick={show}>
                <img src={scrolle} alt='' style={{ width: '20px', display: 'block', filter: 'brightness(1.6)' }}></img>
            </button>
          <span>Rolar para<img src={scrolle} alt=''></img></span>
          <ul>
            <li to='home' onClick={click} className='on'><span>Home</span><img src={arrow} alt=''></img></li>
            <li to='values' onClick={click}><span>Valores</span><img src={arrow} alt=''></img></li>
            <li to='about' onClick={click}><span>Sobre</span><img src={arrow} alt=''></img></li>
            <li to='development' onClick={click}><span>Desenvolvimento</span><img src={arrow} alt=''></img></li>
            <li to='contact' onClick={click}><span>Contato</span><img src={arrow} alt=''></img></li>
            <li to='autors' onClick={click}><span>Autores</span><img src={arrow} alt=''></img></li>
          </ul>
        </div>
    )
}