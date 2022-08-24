import logo from '../images/iconbeauty 2.svg'

function Header() {
    let time = 0
    function mouseMove(e) {
        window.ok = false
        clearTimeout(time)
        if (e.target.tagName !== 'A') return

        const el = document.elementFromPoint(e.clientX, e.clientY)
        const pos = el.getBoundingClientRect().left
        
        const slider = document.getElementById('slider')
        const pos_box = document.querySelector('#header .box').getBoundingClientRect().left
        if (pos - pos_box < 0) return
        slider.style.transform = `translateX(${pos - pos_box}px)`
    }
    
    function mouseOut(e) {
        time = setTimeout(() => {
            const slider = document.getElementById('slider')
            const pos_box = document.querySelector('#header .box').getBoundingClientRect().left
            const pos_pin = document.getElementById('pin').getBoundingClientRect().left
            slider.style.transform = `translateX(${pos_pin - pos_box}px)`
        }, 300)
        window.ok = true
    }
    
    function click(e) {
        window.ok = true
        window.isScrolling = true
        const pos = e.target.getBoundingClientRect().left
        document.querySelectorAll('#header .box a').forEach((el) => el.classList.remove('on'))
        e.target.classList.add('on')
        const pos_box = document.querySelector('#header .box').getBoundingClientRect().left

        const pin = document.getElementById('pin')
        pin.style.transform = `translateX(${pos - pos_box}px)`

        const top = document.getElementById(e.target.getAttribute('to')).getBoundingClientRect().top
        const scroll = document.getElementById('main_container').scrollTop
        document.getElementById('main_container').scrollTop = top - 150 + scroll
        setTimeout(() => window.isScrolling = false, 550)
    }

    return (
        <div id='header'>
            <div className='logo-box'>
                <img src={logo} id='logo'></img>
            </div>
            <div class='box' onMouseMove={mouseMove} onMouseLeave={mouseOut}>
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