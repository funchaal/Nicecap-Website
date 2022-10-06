import android_button from '../images/sup/Download android.svg'
import appstore_button from '../images/sup/Download_on_the_App_Store_Badge_PTBR_RGB_wht_100317.svg'
import androidqrcode from '../images/sup/androidqrcode.svg'
import appstoreqrcode from '../images/sup/appstoreqrcode.svg'
import quote from '../images/icons/quote.svg'

export default function Home() {
    return(
        <>
            <p id="slogan">
                <img src={quote} alt=''></img><span>Por um mundo mais acessível.</span><img src={quote} alt=''></img>
            </p>
            <h2 id='home'>Nicecap<div></div></h2>
            <div className='default'>
                <p>
            A proposta se baseia em um sistema com sensor de aproximação acoplado a um boné que alerta o usuário com um sinal sonoro ao aproximar de um obstáculo. O sistema ainda conta com um app próprio para personalização do usuário. Uma vez que cerca de <strong>22%</strong> da população santista tem algum tipo de deficiência, sendo que <strong>54%</strong> desses são deficientes visuais, este projeto será útil para promover maior segurança aos deficientes ao se locomoverem no meio urbano.
            </p>
                {/* <h3>Download app<div></div></h3> */}
                <div className='download'>
                <div>
                    <img src={android_button} className='button' alt=''></img>
                    <label>Android QR Code</label>
                    <div>
                    <img src={androidqrcode} alt=''></img>
                    </div>
                </div>
                <div className='white-divisor download'></div>
                <div>
                    <img src={appstore_button} className='button' style={{ pointerEvents: 'none' }} alt=''></img>
                    <label>App Store QR Code</label>
                    <div>
                    <img src={appstoreqrcode} alt=''></img>
                    </div>
                </div>
                </div>
            </div>
            </>
    )
}