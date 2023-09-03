import styled from 'styled-components';

const Td = styled.td`
    padding: 10px;
    border: 1px solid #ccc;
`;

export default function ArtistsList(){
    const artistList = [
        { 
            nome: "João Silva", 
            email: "joao.silva@example.com", 
            telefone: "(11) 99999-9999" },
        { 
            nome: "Maria Souza", 
            email: "maria.souza@example.com", 
            telefone: "(11) 88888-8888" },
        { 
            nome: "Pedro Santos",
            email: "pedro.santos@example.com",
            telefone: "(11) 77777-7777" }
    ]
    return (
        <tbody>
            {artistList.map((artist, index) => (
                <tr>
                    <Td>{artist.nome}</Td>
                    <Td>{artist.email}</Td>
                    <Td>{artist.telefone}</Td>
                </tr>
            ))}
        </tbody>
    )
}
/*
<tr>
    <td>João Silva</td>
	<td>joao.silva@example.com</td>
    <td>(11) 99999-9999</td>
</tr>
			<tr>
				<td>Maria Souza</td>
				<td>maria.souza@example.com</td>
				<td>(11) 88888-8888</td>
			</tr>
			<tr>
				<td>Pedro Santos</td>
				<td>pedro.santos@example.com</td>
				<td>(11) 77777-7777</td>
			</tr> */