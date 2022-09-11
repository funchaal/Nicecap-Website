import logo from '../images/iconbeauty 2.svg'

function Header() {
    let timing = 0
    
    function click(e) {
        const main_container = document.getElementById('main_container')
        
        document.querySelectorAll('#header .op-box a').forEach((el) => el.classList.remove('on'))
        e.target.classList.add('on')

        const op_pos = e.target.getBoundingClientRect().left
        const bx_pos = document.querySelector('#header .op-box').getBoundingClientRect().left

        const pin = document.getElementById('pin')
        pin.style.transform = `translateX(${op_pos - bx_pos}px)`

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

    return (
        <div id='header'>
            <div className='logo-box'>
                <img src={logo} id='logo'></img>
            </div>
            <div class='op-box'>
                <div id='slider'></div>
                <div id='pin'></div>
                <button type='button' onClick={click}><a className='on' to='download'><span>Download</span></a></button>
                <button type='button' onClick={click}><a to='about'><span>Sobre</span></a></button>
                <button type='button' onClick={click}><a to='contact'><span>Contato</span></a></button>
                <button type='button' onClick={click}><a to='autors'><span>Autores</span></a></button>
            </div>
        </div>
    )
}

export default Header