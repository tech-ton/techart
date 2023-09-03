import ArtistsList from "./List/list";
import styled from 'styled-components';

const ArtistsTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`;

export default function BodyArtists(){
    return(
        <ArtistsTable>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                </tr>
            </thead>
                <ArtistsList/>
	    </ArtistsTable>
    )
}