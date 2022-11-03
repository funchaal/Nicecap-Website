import and from '../images/Download android.svg'
import app from '../images/Download_on_the_App_Store_Badge_PTBR_RGB_wht_100317.svg'

import {
    createBrowserRouter, 
    RouterProvider, 
    Link, 
    Route
  } from "react-router-dom";

export default function Home_1() {
    return(
        <section id='home' land='yes'>
            <box>
                <h1>Nicecap</h1>
                <h2>Por um mundo mais acessível</h2>
                <p style={{ fontSize: '1rem', fontWeight: '300', margin: '5px 0' }}>Conheça mais sobre nosso projeto que concorreu a diversas feiras de inovação como Feteps e Febrace.</p>
                <button onClick={() => {
                    document.getElementById('reason').scrollIntoView({ behavior: 'smooth' })
                }}>Saiba mais</button>
                <button style={{ marginLeft: '15px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>Contato</button>
                <div style={{ width: '60%', height: '3px', backgroundColor: 'white', borderRadius: '10px', marginTop: '20px' }}></div>
                    <span style={{ display: 'block', marginTop: '15px', fontSize: '1.1rem' }}>Baixar aplicativo</span>
                <box>
                    <img src={and} />
                    <img src={app} style={{ marginLeft: '15px' }} />
                </box>
            </box>
        </section>
    )
}