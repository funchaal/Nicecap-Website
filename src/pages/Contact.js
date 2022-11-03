import {
    createBrowserRouter, 
    RouterProvider, 
    Link, 
    Route
  } from "react-router-dom";

  import instagram from '../images/icons/instagram_color_2.svg'
  import youtube from '../images/icons/youtube_color.svg'

export default function Contact() {
    return (
        <>
            <section id='contact' land='yes' style={{ height: '50%' }}>
                <box style={{ height: '100%' }}>
                    <h1>Contate-nos</h1>
                    {/* <h2>Envie uma mensagem para nós</h2> */}
                </box>
            <form>
                    <box>
                        <input type='text' placeholder='Nome'></input>
                        <label>Nome</label>
                    </box>
                    <box>
                        <input type='text' placeholder='Email'></input>
                        <label>Email</label>
                    </box>
                    <box>
                        <textarea type='text' style={{ height: '200px', padding: '20px' }} placeholder='Mensagem'></textarea>
                        <label>Mensagem</label>
                    </box>
                    <button type='submit'>Enviar</button>
                </form>
            </section>
            <section style={{ height: '50%', justifyContent: 'flex-start', minHeight: '300px' }}>
                <box>
                    <h3>Informações de contato</h3>
                    <p style={{ fontSize: '0.9rem', fontWeight: '300', marginBottom: '20px' }}>Envie uma mensagem a qualquer momento em um dos nossos meios abaixo ou no formulário ao lado. Tentaremos responder o mais breve possível.</p>
                    <box>
                        <label>Email</label>
                        <p>nicecap.company@gmail.com</p>
                    </box>
                    <box>
                        <label>Celular</label>
                        <p>+55 13 98126-2295</p>
                    </box>
                    <box>
                        <label>Redes sociais</label>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '5px' }}><img src={instagram} style={{ width: '30px', marginRight: '15px' }} /><img src={youtube} style={{ width: '30px', marginRight: '15px' }} /></div>
                    </box>
                </box>
            </section>
        </>
    )
}