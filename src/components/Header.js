import { Link } from 'react-router-dom'

import logo from '../images/logo.svg'

import Menu from './Menu.js'

export default function Header() {
    return (
        <header>
            <Link to={'/'} id='logo_link'><img src={logo} id='logo'></img></Link>
            <div style={{ width: '2px', height: '30px', backgroundColor: 'white', borderRadius: '10px', margin: '0 5px 0 35px' }} />
            <box>
                <Link to={'contact'}>Contato</Link>
                <Link to={'development'}>Desenvolvimento</Link>
            </box>
            <Menu />
        </header>
    )
}