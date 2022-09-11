import './App.css';
import Header from './components/Header.js'
import iconbeauty from './images/iconbeauty.svg'
import app_qrcode from './images/frame (3).png'
import android_button from './images/Download android.svg'
import appstore_button from './images/Download_on_the_App_Store_Badge_PTBR_RGB_wht_100317.svg'
import androidqrcode from './images/androidqrcode.svg'
import appstoreqrcode from './images/appstoreqrcode.svg'
import logo from './images/iconbeauty 2.svg'
import eu from './images/eu 2.jpg'
import vito from './images/vito.jpeg'
import instagram_ic from './images/instagram.png'
import linkedin_ic from './images/linkedin.png'
import marco from './images/marques.jpeg'
import bff from './images/bff.jpeg'
import paloma from './images/pamolo.jpeg'
import aline from './images/aline.jpeg'
import rf from './images/rf.svg'
import proto from './images/proto.jpg'
import model from './images/model.png'
import { useEffect, useState } from 'react'
import loading_ic from './images/loading-ic.svg'
import collage from './images/collage.JPG'

function App() {
  document.title = 'Nicecap'

  window.scrs_allow = true
  window.scrs_cont = true

  function controlHeader() {
    const header = document.getElementById('header')
    const main_container = document.getElementById('main_container')

    if (window.innerWidth < 700 && main_container.scrollTop > 10) {
      header.style.transform = 'translateY(-35px)'
    } else {
      header.style.transform = 'translateY(0)'
    }
  }

  window.onresize = () => {
    controlHeader()
  }

  useEffect(() => {
    const main_container = document.getElementById('main_container')
    main_container.addEventListener('wheel', () => {
      window.scrs_cont = false
    })
    main_container.addEventListener('touchmove', () => {
      window.scrs_cont = false
    })
  })
  
  function alternateOps() {
    controlHeader()

    if (window.scrs_allow === false) return

    const el = Array.from(document.querySelectorAll('h2')).filter((val) => {
      const top = val.getBoundingClientRect().top
      return top > -150 && top < 400
    })

    if (!el[0]) return
    
    const op = document.querySelector(`#header a[to='${el[0].id}']`)

    document.querySelectorAll('#header .op-box a').forEach((el) => el.classList.remove('on'))
    op.classList.add('on')

    const op_pos = op.getBoundingClientRect().left

    const bx_pos = document.querySelector('#header .op-box').getBoundingClientRect().left
    const pin = document.getElementById('pin')

    pin.style.transform = `translateX(${op_pos - bx_pos}px)`
  }

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
                document.querySelectorAll('#contact_form .input').forEach((el) => { el.value = ''; el.blur() })
            } else if (res.errors && res.errors[0].code === 'TYPE_EMAIL') {
                document.getElementById('contact_email').focus()
            } else {
                //sendMessage('Houve um erro do servidor :/', 'red')
            }
        }
    }

  return (
    <main>
      <Header/>
      <div id='main_container' onScroll={alternateOps}>
        <div className='side left'>
          <h2 id='download' style={{  }}>Nicecap</h2>
          {/* <div className='text-divisor'></div> */}
          <div className='default'>
            <p>
          A proposta se baseia em um sistema com sensor de aproximação acoplado a um boné que alerta o usuário com um sinal sonoro ao aproximar de um obstáculo. O sistema ainda conta com um app próprio para personalização do usuário. Uma vez que cerca de <strong>22%</strong> da população santista tem algum tipo de deficiência, sendo que <strong>54%</strong> desses são deficientes visuais, este projeto será útil para promover maior segurança aos deficientes ao se locomoverem no meio urbano.
          </p>
                <label className='download-label'>Download app
                <div className='download-divisor'></div>
                </label>
            <div className='download'>
              <div>
                <img src={android_button} className='button'></img>
                <label>Android QR Code</label>
                <div>
                  <img src={androidqrcode}></img>
                </div>
              </div>
              <div className='white-divisor download'></div>
              <div>
                <img src={appstore_button} className='button' style={{ pointerEvents: 'none' }}></img>
                <label>App Store QR Code</label>
                <div>
                  <img src={appstoreqrcode}></img>
                </div>
              </div>
            </div>
          </div>
          <div className='divisor'></div>
              <h2 id='about'>Sobre</h2>
          {/* <div className='text-divisor'></div> */}
              <div className='default'>
              <p>O Nicecap é um dispositivo que tem como objetivo proporcionar maior segurança e acessibiidade na locomoção de deficientes visuais no ambiente urbano. A ideia veio com base no video a seguir enquanto discutiamos qual seria o projeto que desenvolveriamos para a feira de ciências.</p></div>
            <div className='default'>
              <iframe
                src={`https://www.youtube.com/embed/ZpZaRejnOxE?autoplay=1&mute=1&loop=1`}
                frameBorder="0"
                allow="autoplay"
                allowFullScreen
                title="Vídeo base"
              />
            </div>
            <div className='default'>
            <p>Nesse vídeo podemos notar que mesmo com a muleta para identificar obstáculos a sua volta, o deficiente ainda sofreu uma colisão com o caminhão por ter a parte superior do seu corpo desprotegida. Dessa forma, o Nicecap é útil para evitar esse tipo de incidente.</p>
            <p>O problema com obstáculos para a lomoção urbana é bem expressivo. Como se pode ver nas imagens, a quantidade de caminhões parados na rua em um raio de 2 quadras do bairro é bem grande, além de lixeiras altas que são também bem comuns.</p>
            <img src={collage}></img>
            </div>
            <div className='default'>
            <span>Como foi feito
                <div className='download-divisor'></div>
            </span>
            <p>A primeira etapa do desenvolvimento foi criar um modelo digital no TinkerCAD do circuito que estruturaria o projeto.</p>
              <img src={model}></img>
              <p>Depois de planejado, foram comprados os componentes e quando estavam em mãos, o protótipo foi montado e foi criado um código inicial em C++ para interagir com o sensor, os leds, o alto-falante e o arduino.</p>
              <img src={proto}></img>
              <p>Depois de um tempo veio a ideia de criar um app também para customizar as funções do dispositivo de forma intuitiva. Criado o app, a etapa final praticamente era remontar o dispositivo reduzindo a quantidade de fios, tornando-o compacto e mais agradável, além de fazer melhorias no código acrescentando por exemplo um algoritmo de variancia para detectar se a pessoa está andando ou parada, para evitar ficar apitando enquanto a pessoa estiver em repouso.</p>
              </div>
            <div className='divisor'></div>
            <h2 id='contact' name='contact'>Contato</h2>
            {/* <div className='text-divisor'></div> */}
            <div className='default'>
              <p style={{ marginBottom: 0 }}>Para entrar em contato, é só enviar um email para: </p>
              <span id='nicecap_email'>nicecap@outlook.com</span>
              <p>Ou se preferir, pode mandar uma mensagem direto daqui: </p>
              <form id='contact_form' onSubmit={formSubmit}>
                <label>Nome: </label>
                <input type='text' id='contact_name' name='name' placeholder='Insira o seu nome' required={true}></input>
                <label>Email: </label>
                <input type='text' id='contact_email' name='email' placeholder='mateus_surfista@gmail.com' required={true}></input>
                <label>Mensagem: </label>
                <textarea id='contact_message' name='message' placeholder='Muito bom esse projeto!!' required={true}></textarea>
                <button type='submit'><img src={loading_ic} className='loading'></img><span>Enviar</span></button>
              </form>
            </div>
            <div className='divisor'></div>
            <h2 id='autors' name='autors'>Autores</h2>
          {/* <div className='text-divisor'></div> */}
            <div className='default'>
            <p>Esse projeto foi idealizado e construído por três principais autores, Marco Antonio Vieira Lopes Rubens, Rafael Funchal e Vitor Henrique Funchal Nascimento.</p>
            <div className='instagram-ctn'>
              <div className='instagram-box'>
                <img src={marco}></img>
                <span className='name'>Marco Vieira</span>
                <div className='instagram-divisor'></div>
                <div className='social'>
                  <a target='_blank' href='https://www.instagram.com/marcoo_vieira/' style={{ marginBottom: '5px' }}><img src={instagram_ic}></img>marcoo_vieira</a>
                  <a target='_blank'><img src={linkedin_ic}></img>linkedin</a>
                </div>
              </div>
              <div className='instagram-box'>
                <img src={eu}></img>
                <span className='name'>Rafael Funchal</span>
                <div className='instagram-divisor'></div>
                <div className='social'>
                  <a target='_blank' href='https://www.instagram.com/rafaelfunchal_/' style={{ marginBottom: '5px' }}><img src={instagram_ic}></img>rafaelfunchal_</a>
                  <a target='_blank' href='https://linkedin.com/in/rafael-funchal/' style={{ marginBottom: '5px' }}><img src={linkedin_ic}></img>linkedin</a>
                  <a target='_blank' href='https://rafaelfunchal.vercel.app'><img src={rf}></img>site</a>
                </div>
              </div>
              <div className='instagram-box'>
                <img src={vito}></img>
                <span className='name'>Vitor Funchal</span>
                <div className='instagram-divisor'></div>
                <div className='social'>
                  <a target='_blank' href='https://www.instagram.com/funchal_009/' style={{ marginBottom: '5px' }}><img src={instagram_ic}></img>funchal_009</a>
                  <a target='_blank' href='https://www.linkedin.com/in/vitor-funchal-286111206'><img src={linkedin_ic}></img>linkedin</a>
                </div>
              </div>
              <div className='divisor' style={{ position: 'absolute', bottom: '-50px', margin: 0 }}></div>
            </div>
            <span style={{ marginBottom: 0 }}>Colaboradores</span>
            <div id='autors' name='autors' className='instagram-ctn'>
              <div className='instagram-box'>
                <img src={paloma}></img>
                <span className='name'>Paloma Soares</span>
                <div className='instagram-divisor'></div>
                <div className='social'>
                  <a target='_blank' href='https://www.instagram.com/palominhaab_soaress/' style={{ fontSize: '0.6em' }}><img src={instagram_ic}></img>palominhaab_soaress</a>
                  {/* <a target='_blank' href='https://www.linkedin.com/in/marco-vieira-1a910a240'><img src={linkedin_ic}></img>linkedin</a> */}
                </div>
              </div>
              <div className='instagram-box'>
                <img src={bff}></img>
                <span className='name'>Livia Santana</span>
                <div className='instagram-divisor'></div>
                <div className='social'>
                  <a target='_blank' href='https://www.instagram.com/liviasantanacm/'><img src={instagram_ic}></img>liviasantanacm</a>
                  {/* <a target='_blank' href='https://www.linkedin.com/in/vitor-funchal-286111206'><img src={linkedin_ic}></img>linkedin</a> */}
                </div>
              </div>
            <div className='divisor' style={{ position: 'absolute', bottom: '-50px', margin: 0 }}></div>
            </div>
            <span style={{ marginBottom: 0 }}>Orientadora</span>
            <div className='instagram-ctn'>
              <div className='instagram-box'>
                <img src={aline}></img>
                <span className='name'>Aline Patriota</span>
                <div className='instagram-divisor'></div>
                <div className='social'>
                  <a target='_blank' href='https://www.instagram.com/alinepatriota/'><img src={instagram_ic}></img>alinepatriota</a>
                  {/* <a target='_blank' href='https://www.linkedin.com/in/marco-vieira-1a910a240'><img src={linkedin_ic}></img>linkedin</a> */}
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </main>
  )
}

export default App;
