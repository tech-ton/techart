import styled from "styled-components";

const ListaUl = styled.ul`
    margin-top: -30px;
    padding: 0;
    list-style: none;
    text-align: right;
`;

const ListaLi = styled.li`
    margin-left: 20px;
    margin-right: 20px;
    display: inline-block;
    font-size: 18px;
`;

export default function Lista (){
    const listaItens = [
        {text: "Obras"},
        {text: "Artistas"},
        {text: "Sobre"},
        {text: "Sair"}
    ]
    return (

        <ListaUl>
            {listaItens.map((item, index) => (
                <ListaLi key={index}>
                    {item.text}
                </ListaLi>
            ))}
        </ListaUl>
    )
}