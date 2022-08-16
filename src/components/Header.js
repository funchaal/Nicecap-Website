function Header() {
    return (
        <div id='header'>
            <span>NICECAP</span>
            <div class='box'>
                <button type='button'>Sobre</button>
                <button type='button'>Autores</button>
                <button type='button' className='on'>Contato</button>
            </div>
        </div>
    )
}

export default Header