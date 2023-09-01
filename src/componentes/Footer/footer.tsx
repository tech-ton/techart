import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #333;
	color: #fff;
	padding: 20px;
	text-align: center;
`;

const FooterText = styled.p`
    margin: 0;
	font-size: 18px;
`;

export default function Footer () {
    return (
        <FooterContainer>
            <FooterText>Todos os direitos reservados. &copy; Tech Art.</FooterText>
        </FooterContainer>
        
    )
}