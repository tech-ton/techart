import styled from 'styled-components';
import BodyList from './Body-List/list';
import { Feature } from './feature-style';

const SectionHero = styled.section`
    background-image: #000;
	background-size: cover;
	background-position: center center;
	height: 500px;
	display: flex;
	align-items: center;
	justify-content: center;

    h2 {
        color: #000000;
        font-size: 48px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    p {
        color: #000000;
        font-size: 24px;
        max-width: 800px;
        text-align: center;
        margin: 0 auto;
        margin-bottom: 50px;
    }
`;


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