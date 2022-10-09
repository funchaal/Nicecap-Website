import x from '../images/icons/x.svg'
import loading_ic from '../images/icons/loading-ic.svg'

export default function Suggestion({ setSuggestion }) {
    return (
        <>
            <div id='full_box'>
                <div className='header'>
                    <span>Sugestão</span>
                    <p>Envie uma sugestão para o projeto.</p>
                    <img src={x} style={{ position: 'absolute', top: '20px', right: '20px', height: '15px', cursor: 'pointer' }}
                        onClick={() => setSuggestion(false)}
                     alt=''></img>
                </div>
                <div className='box' style={{ padding: '15px' }}>
                    <form id='suggestion_form_box' style={{ display: 'flex', flexDirection: 'column', paddingTop: '5px' }}>
                        <label style={{ marginBottom: '2px', fontSize: '0.8rem' }}>Nome (opicional): </label>
                        <input type='text' style={{ height: '40px', marginBottom: '20px', backgroundColor: 'rgb(82, 82, 82)' }} id='suggestion_name' name='name' placeholder='Insira o seu nome' required={true}></input>
                        <label style={{ marginBottom: '4px' }}>Email (opicional): </label>
                        <input type='text' style={{ height: '40px', marginBottom: '20px', backgroundColor: 'rgb(82, 82, 82)' }} id='suggestion_email' name='email' placeholder='007@gmail.com' required={true}></input>
                        <label style={{ marginBottom: '4px' }}>Sugestão: </label>
                        <textarea id='suggestion_message' name='message' style={{ backgroundColor: 'rgb(82, 82, 82)' }} placeholder='Muda alguma coisa' required={true}></textarea>
                        <button type='submit' style={{ marginTop: '0', width: '150px', height: '35px' }}><img src={loading_ic} className='loading' alt=''></img><span>Enviar</span></button>
                    </form>
                    <div className='divisor' style={{ margin: '30px auto 15px auto' }}></div>
                    <p style={{ fontWeight: 400 }}>Sugestões são de extrema importância para melhorar e evoluir o projeto.</p>
                </div>
            </div>
        </>
    )
}