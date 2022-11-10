import styled from 'styled-components';
import BackImgKangoo from "../../icons/picture/DE0A7082.jpg";
import { NavLink } from "react-router-dom";

const MainPagePosition = styled.div`
    width: 100vw;
    height: 400px;
    background-image: url('${BackImgKangoo}');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
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