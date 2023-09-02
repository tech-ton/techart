import BodyList from './Body-List/list';
import { Feature } from '../feature-style';
import { SectionHero } from '../sectionhero-style';



export default function HomeBody (){
    return (
        <div>
            <SectionHero>
                <Feature>
                    <h2>Bem-vindo</h2>
                    <p>Descubra as mais incríveis obras de arte, ou se preferir publique suas obras.</p>
                    <a href="#" >Publicar obra</a>
                </Feature>
	        </SectionHero>
            <BodyList/> 
        </div>
    )
}