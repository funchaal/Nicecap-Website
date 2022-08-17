function Header() {
    return (
        <div id='header'>
            <span>NICECAP</span>
            <div class='box'>
                <button type='button'><a href='#download'></a>Download</button>
                <button type='button'><a href='#about'></a>Sobre</button>
                <button type='button' className='on'><a href='#autors'></a>Autores</button>
            </div>
        </div>
    )
}

export default Header