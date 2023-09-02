import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
    height: 60vh;
`;

export default function BodyAbout(){
    return (
        <Container>
            <p>Bem-vindo à Tech Art! Nosso objetivo é tornar o comércio de artes mais acessível e fácil através da interação dos usuários em nosso site.

                Acreditamos que a arte é uma forma poderosa de expressão e criatividade, e queremos que todos tenham a oportunidade de apreciá-la e possuí-la. É por isso que criamos uma plataforma online onde artistas e compradores podem se conectar e negociar diretamente, sem intermediários.

                Nosso site é fácil de usar e intuitivo, permitindo que os usuários naveguem facilmente pelas diferentes categorias de arte, filtrem por preço, estilo e outros critérios, e encontrem as peças perfeitas para suas necessidades e orçamento.

                Além disso, nosso site inclui recursos para facilitar a comunicação entre artistas e compradores, como bate-papo ao vivo. Dessa forma, os usuários podem se comunicar diretamente para negociar preços e fazer perguntas sobre a arte.

                Estamos comprometidos em fornecer um serviço excepcional aos nossos usuários e estamos sempre procurando maneiras de melhorar e aprimorar nossa plataforma. Se você é um artista procurando vender sua arte ou um comprador em busca de uma peça única, estamos aqui para ajudar. Junte-se a nós e comece a explorar o mundo da arte online hoje!
            </p>
        </Container>
    )
}