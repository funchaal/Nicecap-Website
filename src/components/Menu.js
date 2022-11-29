import { Link } from "react-router-dom"
import home_icon from '../images/icons/home-ic.svg'
import contact_icon from '../images/icons/contact-ic.svg'
import development_icon from '../images/icons/development-ic.svg'
import feather_icon from '../images/icons/feather-ic.svg'

const options = {
    "Home": {
        link: '/', 
        icon: home_icon
    }, 
    "Contato": {
        link: '/contact', 
        icon: contact_icon
    }, 
    "Desenvolvimento": {
        link: '/development', 
        icon: development_icon
    }, 
    "Bibliografia": {
        link: '/bibliografy', 
        icon: feather_icon
    }
}

export default function Menu() {
    return(
<>
        <nav id='menu'>
            <div className='container'>
                <span>Navegar</span>
                {
                Object.keys(options).map((val) => <li reference={options[val].link} onClick={() => document.getElementById('menu').classList.remove('show')}><Link to={options[val].link}><img src={options[val].icon}/><span>{val}</span></Link></li>)
            }</div>
        </nav>
        <div id='menu_icon' onClick={() => document.getElementById('menu').classList.toggle('show')}>
            <div/>
            <div/>
            <div/>
        </div>
        </>
    )
}