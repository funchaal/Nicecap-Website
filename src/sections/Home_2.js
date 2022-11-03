import image from '../images/nois.jpg'

export default function Home_2() {
    return(
        <section id='reason'>
            <box>
                <h3>Sobre o projeto</h3>
                <p>
                A proposta se baseia em um sistema com sensor de aproximação acoplado a um boné que alerta o usuário com um sinal sonoro ao aproximar de um obstáculo. O sistema ainda conta com um app próprio para personalização do usuário. Uma vez que cerca de 22% da população santista tem algum tipo de deficiência, sendo que 54% desses são deficientes visuais, este projeto será útil para promover maior segurança aos deficientes ao se locomoverem no meio urbano.
                </p>
            </box>
            <img src={image} background='yes'></img>
        </section>
    )
}