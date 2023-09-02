import { Feature } from "../../feature-style"
import styled from 'styled-components';

const SectionFeatures = styled.section`
    background-color: #f7f7f7;
	padding: 50px 0;
`;

export default function BodyList(){
    const list = [ 
        {title: "Descubra novas obras", description: "Navegue por nossa coleção de obras de arte e descubra novas criações que irão inspirar sua imaginação."},
        {title: "Conheça os artistas", description: "Saiba mais sobre os artistas por trás das obras e descubra o que os inspirou a criar essas incríveis obras de arte."},
        {title: "Compre uma obra", description: "Se você se apaixonou por uma obra de arte, agora é possível adquiri-la através do nosso site."}
    ]
    return (
        <SectionFeatures>
            {list.map((item, index) => (
            <Feature key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </Feature>
        ))}
        </SectionFeatures>
    )
}
/*
<Feature>
<h3>Descubra novas obras</h3>
				    <p>Navegue por nossa coleção de obras de arte e descubra novas criações que irão inspirar sua imaginação.</p>
</Feature> 
*/
