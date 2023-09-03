import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px;
`;

const Title = styled.h1`
    text-align: center;
    margin-top: 50px;
`;

const Body = styled.body`
    font-family: sans-serif;
`;

export default function GalleryBody(){
    return (
        <Body>
            <Title>Galeria de Arte</Title>
            <Container>

            </Container>

        </Body>
    )
}