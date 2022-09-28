import styled from 'styled-components';
// import BackImg from '../../icons/bck_img.jpg';
import BackImgKengoo from '../../icons/Kengoo-1.jpg';
import { NavLink } from "react-router-dom";

const MainPagePosition = styled.div`
    width: 100%;
    height: 400px;
    background-image: url('${BackImgKengoo}');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
    /* margin-bottom: 20px; */
`;

const ServicePosition = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 148px;
`;

const SevriceText = styled.h2`
    font-family: 'Times New Roman', Times, serif;
    font-size: 45px;
    font-weight: 700;
    margin: 0px;
    color: white;
`;

const AbonnementLink = styled(NavLink)`
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    font-weight: 400;
    margin-top: 35px;
    background-color: aqua;
    border-radius: 22px;
    color: black;
    text-decoration: none;
    border: 1px solid;
`;


export {
    MainPagePosition,
    SevriceText,
    ServicePosition,
    AbonnementLink
};