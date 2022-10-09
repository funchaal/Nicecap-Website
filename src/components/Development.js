import proto from '../images/media/proto.jpg'
import model from '../images/media/model.png'

export default function Development() {
    return (
        <>
            <h2 id='development'>Desenvolvimento<div></div></h2>
            <div className='default'>
                <p>A primeira etapa do desenvolvimento foi criar um modelo digital no TinkerCAD do circuito que estruturaria o projeto.</p>
                <figure>
                    <img src={model} alt=''></img>
                    <figcaption><strong>Imagem 2: </strong>Modelo digital do circuito incial.</figcaption>
                </figure>
                <p>Depois de planejado, foram comprados os componentes e quando estavam em mãos, o protótipo foi montado e foi criado um código inicial em C++ para interagir com o sensor, os leds, o alto-falante e o arduino.</p>
                <figure>
                    <img src={proto} alt=''></img>
                    <figcaption><strong>Imagem 3: </strong>Protótipo inicial do projeto.</figcaption>
                </figure>
                <p>Depois de um tempo veio a ideia de criar um app também para customizar as funções do dispositivo de forma intuitiva. Criado o app, a etapa final praticamente era remontar o dispositivo reduzindo a quantidade de fios, tornando-o compacto e mais agradável, além de fazer melhorias no código acrescentando por exemplo um algoritmo de variancia para detectar se a pessoa está andando ou parada, para evitar ficar apitando enquanto a pessoa estiver em repouso.</p>
            </div>
            <div className='divisor'></div>
        </>
    )
}