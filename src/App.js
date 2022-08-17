import './App.css';
import Header from './components/Header.js'
import iconbeauty from './images/iconbeauty.svg'
import app_qrcode from './images/frame (3).png'
import googleplay_ic from './images/googleplay_ic.svg'
import appstore_ic from './images/appstore_ic.svg'
import playstoreqrcode from './images/playstoreqrcode.svg'
import appstoreqrcode from './images/appstoreqrcode.svg'
import logo from './images/iconbeauty.svg'
import eu from './images/eu 2.jpg'
import vito from './images/vito.jpeg'
import instagram_ic from './images/instagram.png'
import linkedin_ic from './images/linkedin.png'
import marco from './images/marques.jpeg'
import bff from './images/bff.jpeg'

function App() {
  document.title = 'Nicecap'

  return (
    <main>
      <Header/>
      <div id='main_container'>
        <div className='side left'>
          <p className='default'>
            <img src={logo} style={{ width: '80px', marginBottom: '20px' }}></img>
          </p>
          <h2 id='download'>Nicecap</h2>
          <p className='default'>
          A proposta se baseia em um sistema com sensor de aproximação acoplado a um boné que alerta o usuário com um sinal sonoro ao aproximar de um obstáculo. O sistema ainda conta com um app próprio para personalização do usuário. Uma vez que cerca de 22% da população santista tem algum tipo de deficiência, sendo que 54% desses são deficientes visuais, este projeto será útil para promover maior segurança aos deficientes ao se locomoverem no meio urbano.
                <label style={{ marginTop: '40px', fontWeight: 400 }}>Download app</label>
            <div className='download'>
              <div>
                <button type='button'><img src={googleplay_ic}></img>Android apk</button>
                <label>Play Store QR Code</label>
                <div>
                  <img src={playstoreqrcode}></img>
                </div>
              </div>
              <div>
                <button type='button' className='ios'><img src={appstore_ic}></img>Ios obb</button>
                <label>App Store QR Code</label>
                <div>
                  <img src={appstoreqrcode}></img>
                </div>
              </div>
            </div>
          </p>
          <div className='divisor'></div>
              <h2 id='about'>Sobre</h2>
              <p className='default'>Nesse vídeo podemos notar que mesmo com a muleta para identificar obstáculos a sua volta, o deficiente ainda sofreu uma colisão com o caminhão por ter a parte superior do seu corpo desprotegida.</p>
            <p className='default'>
              <iframe
                src={`https://www.youtube.com/embed/ZpZaRejnOxE`}
                frameBorder="0"
                allow="autoplay"
                allowFullScreen
                title="Vídeo base"
              />
            </p>
            <p className='default'>Nesse vídeo podemos notar que mesmo com a muleta para identificar obstáculos a sua volta, o deficiente ainda sofreu uma colisão com o caminhão por ter a parte superior do seu corpo desprotegida.</p>
            <div className='divisor'></div>
            <h2>Autores</h2>
            <p className='default'>Esse projeto foi idealizado e construído por três principais autores, Marco Antonio Vieira Lopes Rubens, Rafael Funchal e Vitor Henrique Funchal Nascimento.
            <div id='autors' name='autors' className='instagram-ctn'>
              <div className='instagram-box'>
                <img src={marco}></img>
                <span className='name'>Marco Vieira</span>
                <div className='social'>
                  <a href='https://www.instagram.com/marcoo_vieira/' style={{ marginBottom: '5px' }}><img src={instagram_ic}></img>marcoo_vieira</a>
                  <a><img src={linkedin_ic}></img>linkedin</a>
                </div>
              </div>
              <div className='instagram-box'>
                <img src={eu}></img>
                <span className='name'>Rafael Funchal</span>
                <div className='social'>
                  <a href='https://www.instagram.com/rafaelfunchal_/' style={{ marginBottom: '5px' }}><img src={instagram_ic}></img>rafaelfunchal_</a>
                  <a href='https://www.linkedin.com/in/marco-vieira-1a910a240'><img src={linkedin_ic}></img>linkedin</a>
                </div>
              </div>
              <div className='instagram-box'>
                <img src={vito}></img>
                <span className='name'>Vitor Funchal</span>
                <div className='social'>
                  <a href='https://www.instagram.com/funchal_006/' style={{ marginBottom: '5px' }}><img src={instagram_ic}></img>funchal_006</a>
                  <a href='https://www.linkedin.com/in/vitor-funchal-286111206'><img src={linkedin_ic}></img>linkedin</a>
                </div>
              </div>
            </div>
            <h3>Colaboradores</h3>
            <div id='autors' name='autors' className='instagram-ctn'>
              <div className='instagram-box'>
                <img src={eu}></img>
                <span className='name'>Paloma Soares</span>
                <div className='social'>
                  <a href='https://www.instagram.com/palominhaab_soaress/' style={{ marginBottom: '5px', fontSize: '0.6em' }}><img src={instagram_ic}></img>palominhaab_soaress</a>
                  {/* <a href='https://www.linkedin.com/in/marco-vieira-1a910a240'><img src={linkedin_ic}></img>linkedin</a> */}
                </div>
              </div>
              <div className='instagram-box'>
                <img src={bff}></img>
                <span className='name'>Livia Santana</span>
                <div className='social'>
                  <a href='https://www.instagram.com/liviasantanacm/' style={{ marginBottom: '5px' }}><img src={instagram_ic}></img>liviasantanacm</a>
                  {/* <a href='https://www.linkedin.com/in/vitor-funchal-286111206'><img src={linkedin_ic}></img>linkedin</a> */}
                </div>
              </div>
            </div>
            </p>
        </div>
      </div>
    </main>
  )
}

export default App;
