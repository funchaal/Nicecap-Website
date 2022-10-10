import pix from '../images/sup/qrcode_pix.svg'
import x from '../images/icons/x.svg'

export default function Donate({ setDonate }) {
    return (
        <>
            <div id='full_box'>
                <div className='header'>
                    <span>Doar</span>
                    <p>Ajude o projeto financeiramente.</p>
                    <img src={x} style={{ position: 'absolute', top: '20px', right: '20px', height: '15px', cursor: 'pointer' }}
                        onClick={() => setDonate(false)}
                     alt=''></img>
                </div>
                <div className='box'>
                    <div id='donate_pix_box'>
                        <span className='t'>Chave Pix - CPF</span>
                        <span className='r d'>433.166.678-65</span>
                        <span className='t'>QR Code</span>
                        <img className='r' src={pix} alt='' rel='preload'></img>
                    </div>
                    <div className='divisor' style={{ margin: '20px auto 15px auto' }}></div>
                    <p>60% do arrecadado para o projeto será doado para instituições de dificiêntes visuais, ou seja, se você doar 5 reais, 3 reais vão para essas instituições e 2 reais para cobrir o custo do projeto.</p>
                    <p style={{ fontWeight: '500' }}>Após o custo do projeto for coberto, 100% do arrecadado será destinado à essas instituições.</p>
                </div>
            </div>
        </>
    )
}