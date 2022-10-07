import instagram_ic from '../images/icons/instagram_color.svg'
import linkedin_ic from '../images/icons/linkedin_color.svg'
import eu from '../images/autors/eu 2.jpg'
import vito from '../images/autors/vito.jpeg'
import marco from '../images/autors/marques.jpeg'
import bff from '../images/autors/bff.jpeg'
import paloma from '../images/autors/pamolo.jpeg'
import aline from '../images/autors/aline.jpeg'
import rf from '../images/icons/rf.svg'

export default function Autors() {
    return(
        <>
            <h2 id='autors'>Autores<div></div></h2>
            <div className='default'>
            <p>Esse projeto foi idealizado e construído por três principais autores, Marco Antonio Vieira Lopes Rubens, Rafael Funchal e Vitor Henrique Funchal Nascimento.</p>
            <div className='instagram-ctn'>
              <div className='box'>
                <img src={marco} alt=''></img>
                <span className='name'>Marco Vieira</span>
                <div></div>
                <div>
                  <a target=' _blank' rel='noreferrer' href='https://www.instagram.com/marcoo_vieira/' style={{ marginBottom: '5px' }}><img src={instagram_ic} alt=''></img>marcoo_vieira</a>
                  <a target=' _blank' rel='noreferrer'><img src={linkedin_ic} alt=''></img>linkedin</a>
                </div>
              </div>
              <div className='box'>
                <img src={eu} alt=''></img>
                <span className='name'>Rafael Funchal</span>
                <div></div>
                <div>
                  <a target=' _blank' rel='noreferrer' href='https://www.instagram.com/rafaelfunchal_/' style={{ marginBottom: '5px' }}><img src={instagram_ic} alt=''></img>rafaelfunchal_</a>
                  <a target=' _blank' rel='noreferrer' href='https://linkedin.com/in/rafael-funchal/' style={{ marginBottom: '5px' }}><img src={linkedin_ic} alt=''></img>linkedin</a>
                  <a target=' _blank' rel='noreferrer' href='https://rafaelfunchal.vercel.app'><img src={rf} alt=''></img>site</a>
                </div>
              </div>
              <div className='box'>
                <img src={vito} alt=''></img>
                <span className='name'>Vitor Funchal</span>
                <div></div>
                <div>
                  <a target=' _blank' rel='noreferrer' href='https://www.instagram.com/funchal_009/' style={{ marginBottom: '5px' }}><img src={instagram_ic} alt=''></img>funchal_009</a>
                  <a target=' _blank' rel='noreferrer' href='https://www.linkedin.com/in/vitor-funchal-286111206'><img src={linkedin_ic} alt=''></img>linkedin</a>
                </div>
              </div>
              <div className='divisor' style={{ position: 'absolute', bottom: '-50px', margin: 0 }}></div>
            </div>
            <span style={{ marginBottom: 0 }}>Orientadora</span>
            <div className='instagram-ctn'>
              <div className='box'>
                <img src={aline} alt=''></img>
                <span className='name'>Aline Patriota</span>
                <div></div>
                <div>
                  <a target=' _blank' rel='noreferrer' href='https://www.instagram.com/alinepatriota/' style={{ marginBottom: '5px' }}><img src={instagram_ic} alt=''></img>alinepatriota</a>
                  <a target=' _blank' rel='noreferrer' href='https://www.linkedin.com/in/marco-vieira-1a910a240'><img src={linkedin_ic} alt=''></img>linkedin</a>
                </div>
              </div>
            </div>
            </div>
        </>
    )
}