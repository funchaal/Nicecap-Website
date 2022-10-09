import { useState } from 'react'

import loading_ic from '../images/icons/loading-ic.svg'

export default function Contact() {
    const [submitable, setSubmitable] = useState(true)
    
    async function formSubmit(e) {
        e.preventDefault()
        
        if (submitable) {
            setSubmitable(false)
    
            const name = document.getElementById('contact_name').value.trim()
            const email = document.getElementById('contact_email').value.trim()
            const message = document.getElementById('contact_message').value.trim()
    
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
                    message: message
                })
            })
            
            button.style.pointerEvents = 'all'
            button.classList.remove('off')
            
            const res = await data.json()
            
            setSubmitable(true)
            
            if (res.ok) {
                document.querySelectorAll('#contact_form input, #contact_form textarea').forEach((el) => { el.value = ''; el.blur() })
            } else if (res.errors && res.errors[0].code === 'TYPE_EMAIL') {
                document.getElementById('contact_email').focus()
            } else {
                //sendMessage('Houve um erro do servidor :/', 'red')
            }
        }
    }
    return(
        <>
            <h2 id='contact'>Contato<div></div></h2>
            <div className='default'>
              <p style={{ marginBottom: 0 }}>Para entrar em contato, é só enviar um email para: </p>
              <span id='nicecap_email'>nicecap.company@gmail.com</span>
              <p>Ou se preferir, pode mandar uma mensagem direto daqui: </p>
              {/* <h3>Mensagem<div></div></h3> */}
              <form id='contact_form' onSubmit={formSubmit}>
                <label>Nome: </label>
                <input type='text' id='contact_name' name='name' placeholder='Insira o seu nome' required={true}></input>
                <label>Email: </label>
                <input type='text' id='contact_email' name='email' placeholder='mateus_surfista@gmail.com' required={true}></input>
                <label>Mensagem: </label>
                <textarea id='contact_message' name='message' placeholder='Muito bom esse projeto!!' required={true}></textarea>
                <button type='submit'><img src={loading_ic} className='loading' alt=''></img><span>Enviar</span></button>
              </form>
            </div>
            <div className='divisor'></div>
        </>
    )
}