import './App.css';
import Header from './components/Header.js'
import iconbeauty from './images/iconbeauty.svg'

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
          <iframe
            src={`https://www.youtube.com/embed/ZpZaRejnOxE`}
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
            title="Vídeo base"
          />
          </p>
          <h2>Sobre o vídeo</h2>
          <p className='default'>fdsfsdfsdf fd fsd a fda fasf d dsfdsfsdfsdf fd fsd a fda fasf d dsfdsfsdfsdf fd fsd a fda fasf d dsfdsfsdfsdf fd fsd a fda fasf d dsfdsfsdfsdf fd fsd a fda fasf d dsfdsfsdfsdf fd fsd a fda fasf d dsfdsfsdfsdf fd fsd a fda fasf d dsfdsfsdfsdf fd fsd a fda fasf d dsfdsfsdfsdf fd fsd a fda fasf d ds</p>
        </div>
        <div className='side right'>
          <div>
            <img src={iconbeauty}></img>
            <button><a></a></button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App;
