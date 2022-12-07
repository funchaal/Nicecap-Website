import {
    createBrowserRouter, 
    RouterProvider, 
    Link, 
    Route
  } from "react-router-dom"

  import { useEffect } from "react"

  import instagram from '../images/icons/instagram_color_2.svg'
  import youtube from '../images/icons/youtube_color.svg'
  import arrow from '../images/icons/small-arrow.svg'
  import correct from '../images/icons/correct.svg'
  import loading from '../images/icons/loading-ic.svg'
  import x from '../images/icons/x.svg'
  import { useState } from "react"
  import sendMessage from '../modules/sendMessage.js'

export default function Contact() {
    useEffect(() => {
        const menu = document.getElementById('menu')
        menu.querySelectorAll('.container li').forEach((val) => val.classList.remove('on'))
        menu.querySelector('.container li[reference="/contact"]').classList.add('on')
    })

    const [submitable, setSubmitable] = useState(true)

    async function formSubmit(e) {
        e.preventDefault()
        
        if (submitable) {
            setSubmitable(false)

            const inputs = Array.from(document.querySelectorAll('#contact_form input, #contact_form textarea'))
            const [name, email, subject, message] = inputs.map(({ value }) => value.trim())

            const button = document.querySelector('#contact_form button[type="submit"]')
            
            button.style.pointerEvents = 'none'
            button.classList.add('off')
            
            const data = await fetch('https://formspree.io/f/mbjblzdw', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, 
                method: "POST", 
                body: JSON.stringify({
                    name: name, 
                    email: email, 
                    subject: subject, 
                    message: message
                })
            })
            
            
            const res = await data.json()
            button.classList.remove('off')
            
            if (res.ok) {
                button.classList.add('ok')
                sendMessage('Menssagem enviada!', 'rgba(0, 240, 0, 1)', 'white', 2000)
                document.querySelectorAll('#contact_form input, #contact_form, textarea').forEach((el) => { el.value = ''; el.blur() })
            } else if (res.errors && res.errors[0].code === 'TYPE_EMAIL') {
                button.classList.add('error')
                sendMessage('Insira corretamente o e-mail', 'red', 'white', 3000)
                document.querySelector('#contact_form input[name="email"]').focus()
            } else {
                button.classList.add('error')
                sendMessage('Houve um erro do servidor :/', 'red', 'white', 3000)
            }

            setTimeout(() => {
                button.classList.remove('ok', 'error')
                button.style.pointerEvents = 'all'
                setSubmitable(true)
            }, 1000)
        }
    }
    return (
        <>
            <section id='contact' land='yes'>
                <box style={{ height: '100%' }}>
                    <h1>Contate-nos</h1>
                    {/* <h2>Envie uma mensagem para nós</h2> */}
                </box>
            </section>
            <section style={{ minHeight: '300px' }} className='no-reverse'>
                <box>
                    <h3>Informações de contato</h3>
                    <p style={{ fontSize: '1rem', fontWeight: '300', marginBottom: '20px' }}>Envie uma mensagem a qualquer momento em um dos nossos meios abaixo ou no formulário ao lado. Tentaremos responder o mais breve possível.</p>
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
                <form id='contact_form' onSubmit={formSubmit}>
                        <box>
                            <input type='text' name='name' placeholder='Nome' required></input>
                            <label>Nome</label>
                        </box>
                        <box>
                            <input type='text' name='email' placeholder='Email' required></input>
                            <label>Email</label>
                        </box>
                        <box>
                            <input type='text' name='subject' placeholder='Assunto' required></input>
                            <label>Assunto</label>
                        </box>
                        <box>
                            <textarea type='text' name='message' style={{ height: '200px', padding: '20px' }} placeholder='Mensagem' required></textarea>
                            <label>Mensagem</label>
                        </box>
                        <button type='submit'><span>Enviar</span><img className='a' src={arrow}/><img className='b' src={correct}/><img className='c' src={x}/><img src={loading} className='loading'/></button>
                    </form>
            </section>
        </>
    )
}