import collage from '../images/media/collage.JPG'

export default function About() {
    return(
        <>
            <h2 id='about'>Sobre<div></div></h2>
            <div className='default'>
            <p>O Nicecap é um dispositivo que tem como objetivo proporcionar maior segurança e acessibiidade na locomoção de deficientes visuais no ambiente urbano. A ideia veio com base no video a seguir enquanto discutiamos qual seria o projeto que desenvolveriamos para a feira de ciências.</p></div>
            <div className='default'>
              <figure>
                <iframe
                  src={`https://www.youtube.com/embed/ZpZaRejnOxE?&autoplay=1&mute=1&loop=1&rel=0&modestbranding=1`}
                  frameBorder="0"
                  allow="autoplay"
                  allowFullScreen
                  title="Vídeo base"
                />
              <figcaption><strong>Vídeo: </strong>Deficiente visual se acidentando.</figcaption>
            </figure>
            </div>
            <div className='default'>
            <p>Nesse vídeo podemos notar que mesmo com a muleta para identificar obstáculos a sua volta, o deficiente ainda sofreu uma colisão com o caminhão por ter a parte superior do seu corpo desprotegida. Dessa forma, o Nicecap é útil para evitar esse tipo de incidente.</p>
            <p>O problema com obstáculos para a lomoção urbana é bem expressivo. Como se pode ver nas imagens, a quantidade de caminhões parados na rua em um raio de 2 quadras do bairro é bem grande, além de lixeiras altas que são também bem comuns.</p>
            <figure>
              <img src={collage} alt=''></img>
              <figcaption><strong>Imagem 1: </strong>Obstáculos urbanos para a locomoção.</figcaption>
            </figure>
            </div>
            <div className='divisor'></div>
        </>
    )
}