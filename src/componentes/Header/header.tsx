import React from "react";
import styled from "styled-components";
import Lista from "./List/list";
const Container = styled.div`
    background-color: #333;
    color: #fff;
    padding: 20px;
`;

const Titulo = styled.h1`
    margin: 20px;
	font-size: 36px;
	font-weight: bold;
`;



function Header ({ text }: {text: string}) {
    
    return(
        <Container>
            <Titulo>{text}</Titulo>
            <Lista/>
        </Container>
        )
}

export default Header;