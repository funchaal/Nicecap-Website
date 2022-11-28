import { Link } from "react-router-dom"

const options = {
    "Contato": '/contact', 
    "Desenvolvimento": '/development'
}

export default function Menu() {
    return(
<>
        <nav id='menu'>
            <div className='container'>{
                Object.keys(options).map((val) => <li><Link to={options[val]}><span>{val}</span></Link></li>)
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