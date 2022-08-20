import './App.css';
import Header from './components/Header.js'
import iconbeauty from './images/iconbeauty.svg'
import app_qrcode from './images/frame (3).png'
import googleplay_ic from './images/googleplay_ic.svg'
import appstore_ic from './images/appstore_ic.svg'
import playstoreqrcode from './images/playstoreqrcode.svg'
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

function App() {
  document.title = 'Nicecap'

  window.ok = true

  function myfunc() {
    if (window.isScrolling) return

    const el = Array.from(document.querySelectorAll('h2')).filter((val) => val.getBoundingClientRect().top > -150 && val.getBoundingClientRect().top < 400)

    if (!el[0]) return
    
    const item = document.querySelector(`#header a[to='${el[0].id}']`)

    document.querySelectorAll('#header .box a').forEach((el) => el.classList.remove('on'))
    item.classList.add('on')

    const item_pos = item.getBoundingClientRect().left

    const pos_box = document.querySelector('#header .box').getBoundingClientRect().left
    const pin = document.getElementById('pin')
    const slider = document.getElementById('slider')

    pin.style.transform = `translateX(${item_pos - pos_box}px)`
    if (window.ok) slider.style.transform = `translateX(${item_pos - pos_box}px)`
  }

  return (
    <main>
      
      <Header/>
      <div id='main_container' onScroll={myfunc} blocked='no'>
        <div className='side left'>
          <h2 id='download' style={{ margin: '0 auto', fontSize: '2.5em', fontWeight: 'bold' }}>NICECAP</h2>
          <div className='text-divisor' style={{ margin: '0 auto', marginBottom: '40px' }}></div>
          <div className='default'>
            <p>
          A proposta se baseia em um sistema com sensor de aproximação acoplado a um boné que alerta o usuário com um sinal sonoro ao aproximar de um obstáculo. O sistema ainda conta com um app próprio para personalização do usuário. Uma vez que cerca de 22% da população santista tem algum tipo de deficiência, sendo que 54% desses são deficientes visuais, este projeto será útil para promover maior segurança aos deficientes ao se locomoverem no meio urbano.
          </p>
                <label className='download-label'>Download app</label>
            <div className='download'>
              <div>
                <button type='button'><img src={googleplay_ic}></img>Android apk</button>
                <label>Play Store QR Code</label>
                <div>
                  <img src={playstoreqrcode}></img>
                </div>
              </div>
              <div className='white-divisor download'></div>
              <div>
                <button type='button' className='ios'><img src={appstore_ic}></img>Ios obb</button>
                <label>App Store QR Code</label>
                <div>
                  <img src={appstoreqrcode}></img>
                </div>
              </div>
            </div>
          </div>
          <div className='divisor'></div>
              <h2 id='about'>Sobre</h2>
          <div className='text-divisor'></div>
              <div className='default'>
              <p>Nesse vídeo podemos notar que mesmo com a muleta para identificar obstáculos a sua volta, o deficiente ainda sofreu uma colisão com o caminhão por ter a parte superior do seu corpo desprotegida.</p></div>
            <div className='default'>
              <iframe
                src={`https://www.youtube.com/embed/ZpZaRejnOxE`}
                frameBorder="0"
                allow="autoplay"
                allowFullScreen
                title="Vídeo base"
              />
            </div>
            <div className='default'>
            <span>Como surgiu</span>
            <p>Nesse vídeo podemos notar que mesmo com a muleta para identificar obstáculos a sua volta, o deficiente ainda sofreu uma colisão com o caminhão por ter a parte superior do seu corpo desprotegida.</p></div>
            <div className='default'>
            <span>Como foi feito</span>
            <p>Nesse vídeo podemos notar que mesmo com a muleta para identificar obstáculos a sua volta, o deficiente ainda sofreu uma colisão com o caminhão por ter a parte superior do seu corpo desprotegida.</p>
              <img src={model}></img>
              <p>Nesse vídeo podemos notar que mesmo com a muleta para identificar obstáculos a sua volta, o deficiente ainda sofreu uma colisão com o caminhão por ter a parte superior do seu corpo desprotegida.</p>
              <img src={proto}></img>
              <p>Nesse vídeo podemos notar que mesmo com a muleta para identificar obstáculos a sua volta, o deficiente ainda sofreu uma colisão com o caminhão por ter a parte superior do seu corpo desprotegida.</p>
              </div>
            <div className='divisor'></div>
            <h2 id='autors' name='autors'>Autores</h2>
          <div className='text-divisor'></div>
            <div className='default'>
            <p>Esse projeto foi idealizado e construído por três principais autores, Marco Antonio Vieira Lopes Rubens, Rafael Funchal e Vitor Henrique Funchal Nascimento.</p>
            <div id='autors' name='autors' className='instagram-ctn'>
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
                  <a target='_blank' href='https://www.instagram.com/funchal_006/' style={{ marginBottom: '5px' }}><img src={instagram_ic}></img>funchal_006</a>
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
