import eu from '../images/autors/eu 2.jpg'
import vito from '../images/autors/vito.jpeg'
import aline from '../images/autors/aline.jpeg'
import instagram_ic from '../images/icons/instagram_color.svg'
import linkedin_ic from '../images/icons/linkedin_color.svg'
import rf from '../images/icons/rf.svg'

export default function Home_4() {
    return (
        <section id='autors'>
            <box>
                <h3>Autores</h3>
                <p>O Nicecap foi idealizado e construído pelos primos Rafael Funchal e Vitor Henrique Funchal Nascimento.</p>
                <p>Aline Patriota Pereira foi a orientadora do projeto.</p>
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
    )
}