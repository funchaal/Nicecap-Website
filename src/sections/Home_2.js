import image from '../images/nois.jpg'

import ods_reducao from '../images/ods_reducao.png'
import ods_inovacao from '../images/ods_inovacao.png'
import ods_saude from '../images/ods_saude.png'

export default function Home_2() {
    return(
        <>
        <section id='reason' style={{ flexDirection: 'row' }} className='no-reverse'>
            <box>
                <h3>Sobre o projeto</h3>
                <p>
                A proposta se baseia em um sistema com sensor de aproximação acoplado a um boné que alerta o usuário com um sinal sonoro ao aproximar de um obstáculo. O sistema ainda conta com um app próprio para personalização do usuário. Uma vez que cerca de 22% da população santista tem algum tipo de deficiência, sendo que 54% desses são deficientes visuais, este projeto será útil para promover maior segurança aos deficientes ao se locomoverem no meio urbano.
                </p>
            </box>
            <img src={image}/>
        </section>
        <section className='no-reverse' style={{ justifyContent: 'flex-start' }}>
            <box id='ods_container'>
                <h3>ODS`s da ONU alcançados pelo projeto</h3>
                <div className='box'>
                    <div className='item'>
                        <img src={ods_reducao}/>
                        <span>Redução das <br/>desigualdades</span>
                    </div>
                    <div className='item'>
                        <img src={ods_inovacao}/>
                        <span>Desenvolvimento, inovação <br/>e infraestrutura</span>
                    </div> 
                    <div className='item' style={{ marginBottom: 0 }}>
                        <img src={ods_saude}/>
                        <span>Saúde e bem-star</span>
                    </div> 
                </div>
            </box>
        </section>
        </>
    )
}