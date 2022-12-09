import eu from '../images/autors/eu 2.jpg'
import vito from '../images/autors/vito.jpeg'
import aline from '../images/autors/aline.jpeg'
import instagram_ic from '../images/icons/instagram_color.svg'
import linkedin_ic from '../images/icons/linkedin_color.svg'
import rf from '../images/icons/rf.svg'
import background from '../images/coiso.jpg'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Title);

export default function Home_4() {
    const images = [eu, vito, aline, rf]
    function imageShower() {
        const element = document.getElementById('image_shower')
        const current = element.querySelector('.show')
        let current_id = 0
        current && (current_id = Number.parseInt(current.getAttribute('num')))
        let next = element.querySelector(`[num="${current_id + 1}"]`) || element.querySelector(`[num="1"]`)
        current && current.classList.remove('show')
        next.classList.add('show')
    }
    setInterval(() => imageShower(), 2000)
    const data = {
        title: 'População', 
        label: 'População', 
        datasets: [
          {
            width: '300px', 
            height: '300px', 
            label: '# of Votes',
            data: [3.4, 96.6],
            backgroundColor: [
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 0.3)',
            ], 
            borderWidth: 0
          },
        ],
      };
      const options = {
        cutout: '90%'
      }
    return (
        <>
        <section className='no-reverse' style={{ backgroundColor: 'rgba(10, 10, 10, 1)' }}>
            <box>
                <p style={{ fontSize: '4.2rem', fontWeight: 700 }}>Mais de 6,97 milhões de brasileiros são deficientes visuais.</p>
            </box>
                <div id='chart_container'><span style={{ fontSize: '5rem', fontWeight: '700', position: 'absolute' }}>3,4%</span><Doughnut data={data} options={options} /></div>
        </section>
        <section className='reverse'>
            <box style={{  }}>
                <h3>Origem da ideia</h3>
                <p>Nesse vídeo podemos notar que mesmo com a muleta para identificar obstáculos a sua volta, o deficiente ainda sofreu uma colisão com o caminhão por ter a parte superior do seu corpo desprotegida. Dessa forma, o Nicecap é útil para evitar esse tipo de incidente.</p>
            </box>
            <iframe src="https://www.youtube.com/embed/ZpZaRejnOxE" figure='yes' title="cego batendo no caminhão" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        {/* <section className='no-reverse'>
            <box>
                <h3>Aplicativo</h3>
                <p>estatisticas dizem nao sei o que o que o que o que dizem nao sei o que o que o que o que dizem nao sei o que o que o que o que dizem nao sei o que o que o que o que dizem nao sei o que o que o que o que dizem nao sei o que o que o que o que v dizem nao sei o que o que o que o que dizem nao sei o que o que o que o que v</p>
            </box>
            <div id='image_shower'>
                {images.map((val, index) => <img src={val} num={index + 1}/>)}
            </div>
        </section> */}
        <section id='autors' className='no-reverse' style={{ backgroundColor: 'rgba(10, 10, 10, 0.7)', flexDirection: 'column' }}>
            <box style={{  }}>
            <img src={background}/>
                <h3 style={{ textAlign: 'center' }}>Autores</h3>
                <p style={{ textAlign: 'center' }}>O Nicecap foi idealizado e construído pelos primos Rafael Funchal e Vitor Henrique Funchal Nascimento.</p>
                <p style={{ textAlign: 'center' }}>Aline Patriota Pereira foi a orientadora do projeto.</p>
            </box>
            <div id='autor_ctn'>
                <box>
                    <img src={eu} alt=''></img>
                    <span className='name'>Rafael Funchal</span>
                    <div></div>
                    <div>
                    <a target=' _blank' rel='noreferrer' href='https://www.instagram.com/rafaelfunchal_/' style={{ marginBottom: '5px' }}><img src={instagram_ic} alt=''></img>rafaelfunchal_</a>
                    <a target=' _blank' rel='noreferrer' href='https://linkedin.com/in/rafael-funchal/' style={{ marginBottom: '5px' }}><img src={linkedin_ic} alt=''></img>linkedin</a>
                    <a target=' _blank' rel='noreferrer' href='https://rafaelfunchal.vercel.app'><img src={rf} alt=''></img>site</a>
                    </div>
                </box>
                <box>
                    <img src={vito} alt=''></img>
                    <span className='name'>Vitor Funchal</span>
                    <div></div>
                    <div>
                    <a target=' _blank' rel='noreferrer' href='https://www.instagram.com/funchal_009/' style={{ marginBottom: '5px' }}><img src={instagram_ic} alt=''></img>funchal_009</a>
                    <a target=' _blank' rel='noreferrer' href='https://www.linkedin.com/in/vitor-funchal-286111206'><img src={linkedin_ic} alt=''></img>linkedin</a>
                    </div>
                </box>
                <box>
                    <img src={aline} alt=''></img>
                    <span className='name'>Aline Patriota</span>
                    <div></div>
                    <div>
                    <a target=' _blank' rel='noreferrer' href='https://www.instagram.com/alinepatriota/' style={{ marginBottom: '5px' }}><img src={instagram_ic} alt=''></img>alinepatriota</a>
                    <a target=' _blank' rel='noreferrer' href='https://www.linkedin.com/in/marco-vieira-1a910a240'><img src={linkedin_ic} alt=''></img>linkedin</a>
                    </div>
                </box>
            </div>
        </section>
        </>
    )
}