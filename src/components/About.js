import proto from '../images/media/proto.jpg'
import model from '../images/media/model.png'
import collage from '../images/media/collage.JPG'

export default function About() {
    return(
        <>
            <h2 id='about'>Sobre<div></div></h2>
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
            <img src={collage} alt=''></img>
            </div>
            <h3><strong>Sobre: </strong>Como foi feito?</h3>
            <div className='default'>
            <p>A primeira etapa do desenvolvimento foi criar um modelo digital no TinkerCAD do circuito que estruturaria o projeto.</p>
              <img src={model} alt=''></img>
              <p>Depois de planejado, foram comprados os componentes e quando estavam em mãos, o protótipo foi montado e foi criado um código inicial em C++ para interagir com o sensor, os leds, o alto-falante e o arduino.</p>
              <img src={proto} alt=''></img>
              <p>Depois de um tempo veio a ideia de criar um app também para customizar as funções do dispositivo de forma intuitiva. Criado o app, a etapa final praticamente era remontar o dispositivo reduzindo a quantidade de fios, tornando-o compacto e mais agradável, além de fazer melhorias no código acrescentando por exemplo um algoritmo de variancia para detectar se a pessoa está andando ou parada, para evitar ficar apitando enquanto a pessoa estiver em repouso.</p>
              </div>
        </>
    )
}