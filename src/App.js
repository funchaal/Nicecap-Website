import './App.css';
import Header from './components/Header.js'
import iconbeauty from './images/iconbeauty.svg'
import app_qrcode from './images/frame (3).png'
import googleplay_ic from './images/googleplay_ic.svg'
import appstore_ic from './images/appstore_ic.svg'
import playstoreqrcode from './images/playstoreqrcode.svg'
import appstoreqrcode from './images/appstoreqrcode.svg'

function App() {
  document.title = 'Nicecap'

  return (
    <main>
      <Header/>
      <div id='main_container'>
        <div className='side left'>
          <h2>Nicecap</h2>
          <p className='default'>
            fdsfsdfsdf fd fsd a fda fasf d dsfdsfsdfsdf fd fsd a fda fasf d dsfdsfsdfsdf fd fsd a fda fasf d dsfdsfsdfsdf fd fsd a fda fasf d dsfdsfsdfsdf fd fsd a fda fasf d dsfdsfsdfsdf fd fsd a fda fasf d dsfdsfsdfsdf fd fsd a fda fasf d dsfdsfsdfsdf fd fsd a fda fasf d dsfdsfsdfsdf fd fsd a fda fasf d ds
                <label style={{ marginTop: '40px', fontWeight: 'bold', textDecoration: 'underline' }}>Download app</label>
            <div className='download'>
              <div>
                <button type='button'><img src={googleplay_ic}></img>Play Store</button>
                <label>Play Store QR Code</label>
                <div>
                  <img src={playstoreqrcode}></img>
                </div>
              </div>
              <div>
                <button type='button'><img src={appstore_ic}></img>App Store</button>
                <label>App Store QR Code</label>
                <div>
                  <img src={appstoreqrcode}></img>
                </div>
              </div>
            </div>
          </p>
          <div className='divisor'></div>
            <p className='default'>
              <iframe
                src={`https://www.youtube.com/embed/ZpZaRejnOxE`}
                frameBorder="0"
                allow="autoplay"
                allowFullScreen
                title="Vídeo base"
              />
            </p>
          <h2>Sobre o vídeo</h2>
          <p className='default'>Nesse vídeo podemos notar que mesmo com a muleta para identificar obstáculos a sua volta, o deficiente ainda sofreu uma colisão com o caminhão por ter a parte superior do seu corpo desprotegida.</p>
        </div>
      </div>
    </main>
  )
}

export default App;
