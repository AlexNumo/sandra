import styled from 'styled-components';

const AlbumPosition = styled.div`
    position: relative;
    margin: 25px 25px 25px 25px;
    background-color: #cfa84e;
    width: inherit;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;

const ImageView = styled.img`
    @media screen and (max-width: 768px) {
        width: 350px !important;
    }
    width: 600px !important;
`;

export {
    AlbumPosition,
    ImageView,
};