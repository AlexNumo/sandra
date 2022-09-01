import styled from 'styled-components';
import BackImg from '../../icons/bck_img.jpg';

const MainPagePosition = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url('${BackImg}');
    background-repeat: no-repeat;
`;

const SevriceText = styled.p`
    position: relative;
    left: 35px;
    top: 40px;
    margin: 0px;

`;

const ServiceBtn = styled.button`
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    font-weight: 400;
    position: relative;
    left: 125px;
    top: 50px;
`;


export { MainPagePosition, ServiceBtn, SevriceText };