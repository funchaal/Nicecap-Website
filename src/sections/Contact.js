function Contact() {
    return (
        <section style={{ height: '800px' }}>
            <box>
                <h3>Entre em contato!</h3>
                <form>
                    <box>
                        <input type='text' placeholder='Nome'></input>
                        <label>Nome</label>
                    </box>
                    <box>
                        <input type='text' placeholder='Email'></input>
                        <label>Email</label>
                    </box>
                    <box>
                        <textarea type='text' style={{ height: '200px', padding: '20px' }} placeholder='Mensagem'></textarea>
                        <label>Mensagem</label>
                    </box>
                    <button type='submit'>Enviar</button>
                </form>
            </box>
        </section>
    )
}

export default Contact