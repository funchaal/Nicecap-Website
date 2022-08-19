import logo from '../images/iconbeauty 2.svg'

function Header() {
    function mouseMove(e) {
        if (e.target.tagName !== 'A') return

        const el = document.elementFromPoint(e.clientX, e.clientY)
        const pos = el.getBoundingClientRect().left

        const slider = document.getElementById('slider')
        const pos_box = document.querySelector('#header .box').getBoundingClientRect().left

        slider.style.transform = `translateX(${pos - pos_box}px)`
    }

    function mouseOut(e) {
        console.log(e.target)
        document.getElementById('main_container').setAttribute('blocked', 'no')

        const slider = document.getElementById('slider')
        const pos_box = document.querySelector('#header .box').getBoundingClientRect().left
        const pos_pin = document.getElementById('pin').getBoundingClientRect().left

        slider.style.transform = `translateX(${pos_pin - pos_box}px)`
    }

    function click(e) {
        window.isScrolling = true
        const pos = e.target.getBoundingClientRect().left
        document.querySelectorAll('#header .box a').forEach((el) => el.classList.remove('on'))
        e.target.classList.add('on')
        const pos_box = document.querySelector('#header .box').getBoundingClientRect().left

        const pin = document.getElementById('pin')
        pin.style.transform = `translateX(${pos - pos_box}px)`

        const top = document.getElementById(e.target.getAttribute('to')).getBoundingClientRect().top
        const scroll = document.getElementById('main_container').scrollTop
        document.getElementById('main_container').scrollTop = top - 130 + scroll
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
                <button type='button' className='on' onClick={click}><a to='download'>Download</a></button>
                <button type='button' onClick={click}><a to='about'>Sobre</a></button>
                <button type='button' onClick={click}><a to='autors'>Autores</a></button>
            </div>
        </div>
    )
}

export default Header