import { Feature } from "../feature-style"
import { SectionHero } from "../sectionhero-style"

export default function BodyProfile(){
    return (
        <SectionHero>
            <Feature>
                <p>Você tem 0 obras vendidas</p>
                <p>Você tem 0 mensagens</p>
                <a href="#" >Mensagens</a><br/>
                <a href="#" >Editar Perfil</a><br/>
                <a href="#" >Minhas Vendas</a>
            </Feature>
        </SectionHero>
    )
}