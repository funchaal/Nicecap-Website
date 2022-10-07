import logo from '../images/logo.svg'
import donate from '../images/icons/donate.svg'
import instagram from '../images/icons/instagram.svg'
import youtube from '../images/icons/youtube.svg'
import suggestion from '../images/icons/suggestion.svg'

function Header({ setDonate, setSuggestion }) {
    let timing = 0
    
    function click(e) {
        
        document.querySelectorAll('#header .op-box a').forEach((el) => el.classList.remove('on'))
        e.target.classList.add('on')
        
        const op_pos = e.target.getBoundingClientRect().left
        const bx_pos = document.querySelector('#header .op-box').getBoundingClientRect().left
        
        const pin = document.getElementById('pin')
        pin.style.transform = `translateX(${op_pos - bx_pos}px)`
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

    return (
        <div id='header'>
            <div className='logo-box'>
                <img src={logo} id='logo' alt=''></img>
            </div>
            <div className="social-box">
                <a href='https://www.youtube.com/channel/UC47xmjVJuJn_wj5tLkmXQiw' target='_blank'><img src={youtube} alt=''></img><span>Youtube</span></a>
                <a href='https://www.instagram.com/nicecap_ofc/' target='_blank'><img src={instagram} alt='' style={{ height: '20px' }}></img><span>Instagram</span></a>
                <div style={{ width: '2px', height: '20px', backgroundColor: 'white', margin: '0 5px 0 30px' }}></div>
                <a><img src={donate} onClick={() => setDonate(true)} alt=''></img></a>
                <a><img src={suggestion} onClick={() => setSuggestion(true)} alt=''></img></a>
            </div>
            {/* <div class='op-box'>
                <div id='slider'></div>
                <div id='pin'></div>
                <button type='button' onClick={click}><a className='on' to='download'><span>Download</span></a></button>
                <button type='button' onClick={click}><a to='about'><span>Sobre</span></a></button>
                <button type='button' onClick={click}><a to='contact'><span>Contato</span></a></button>
                <button type='button' onClick={click}><a to='autors'><span>Autores</span></a></button>
            </div> */}
        </div>
    )
}

export default Header