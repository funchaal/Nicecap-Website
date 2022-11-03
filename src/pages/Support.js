// import pix from '../images/qrcode_pix.svg'

export default function Support() {
    return (<>
        <section id='support' style={{ height: '40%' }}>
            <box>
                <h1>Apoiar</h1>
            </box>
        </section>
        <section style={{ height: '60%', minHeight: '300px' }}>
            <box>
                <h3>Apoie o projeto</h3>
                <p>
                    Ao ajudar o projeto financeiramente você também estará doando para instituições de dificientes visuais. Funciona assim: 60% do arrecadado será destinado a instituições que prezam por deficientes visuais, ou seja, se você doar 5 reais, 3 reais vão para essas instituições e 2 reais para cobrir o custo do projeto.
                </p>
                <p>Após o custo do projeto ser coberto, 100% do arrecadado vai para esses instituições</p>
            </box>
            <box>
                <div style={{ marginRight: '35px' }}>
                    <p style={{ fontSize: '1.2rem', margin: '10px 0 5px 10px', fontWeight: '500' }}>Pix</p>
                    <p style={{ margin: '0 0 15px 10px', fontSize: '1.2rem', fontWeight: '400' }}>CPF - 433.166.678-65</p>
                </div>
                {/* <img src={pix} /> */}
            </box>
        </section>
    </>
    )
}