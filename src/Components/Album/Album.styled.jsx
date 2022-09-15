import styled from 'styled-components';
import AlbumBCK from '../../icons/AlbumBCK.jpg';


const AlbumPosition = styled.div`
    padding: 15px 15px 15px 15px;
    /* background-color: #cfa84e; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;

const AlbumBTN = styled.button`
    font-family: 'Times New Roman', Times, serif;
    font-size: 26px;
    font-weight: 400;
    background-color: white;
    /* border-radius: 22px; */
    background-image: url('${AlbumBCK}');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: contain;
    width: 415px;
    height: 300px;

`;

export {
    AlbumPosition,
    AlbumBTN,
};