import styled, { keyframes } from 'styled-components';
import { flash } from 'react-animations';
import BackImgKangoo from "../../icons/picture/DE0A7082.jpg";
import { NavLink } from "react-router-dom";
const bounceAnimation = keyframes`${flash}`;

const cursor = keyframes `
    0% {
      border-color: white;
    }
  
    50% {
      border-color: transparent;
    }
  
    100% {
      border-color: white;
    }
`;
  
const printed_text = keyframes `
    from {
      width: 0;
    }
`

const MainPagePosition = styled.div`
    width: 100vw;
    height: 400px;
    background-image: url('${BackImgKangoo}');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: contain;
    margin-left: auto;
    margin-right: auto;
`;

const ServicePosition = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 148px;
`;

const WrapperText = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;

const SevriceText = styled.h2`
    font-family: 'Marhey', cursive;
    font-size: 45px;
    font-weight: 700;
    margin: 0px;
    color: white;
    width: 15ch;
    color: white;
    font-family: monospace;
    font-size: 30px;
    white-space: nowrap; /* не переносить текст на другую строку */
    overflow: hidden; /* скрываем переполнение контентом */
    border-right: 3px solid white; /* рисуем курсор */
    animation: ${cursor} 0.75s step-end 1, ${printed_text} 4s steps(15);
`;

const SevriceTextBy = styled.p`
    font-family: 'Marhey', cursive;
    font-size: 25px;
    font-weight: 400;
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
    width: 300px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-family: verdana;
    color: #f5f5f5;
    text-shadow: 
        1px 1px 1px #919191,
        1px 2px 1px #919191,
        1px 3px 1px #919191,
        1px 4px 1px #919191,
        1px 4px 1px #919191,
        1px 4px 1px #919191,
        1px 4px 1px #919191,
        1px 4px 1px #919191,
    1px 18px 6px rgba(16,16,16,0.4),
    1px 22px 10px rgba(16,16,16,0.2),
    1px 25px 35px rgba(16,16,16,0.2),
    1px 30px 60px rgba(16,16,16,0.4);
`;

const FlashDiv = styled.div`
    animation: 5s ${bounceAnimation} infinite;
    z-index: 50;
`


export {
    MainPagePosition,
    WrapperText,
    SevriceText,
    SevriceTextBy,
    ServicePosition,
    AbonnementLink,
    FlashDiv
};