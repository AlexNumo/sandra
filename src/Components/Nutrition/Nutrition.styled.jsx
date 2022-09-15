import styled from 'styled-components';
import NutritionIMG from '../../icons/Nutrition.jpg';

const NutritionStyle = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 15px 15px 15px 15px;
    background-image: url('${NutritionIMG}');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: contain;
`;

const NutritionPosition = styled.h2`
    margin-bottom: 18px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 46px;
    font-weight: 700;
`;

const NutritionBTN = styled.button`
    font-family: 'Times New Roman', Times, serif;
    font-size: 26px;
    font-weight: 700;
    border-radius: 22px;
    background-color: aqua;
`;

export {
    NutritionStyle,
    NutritionPosition,
    NutritionBTN
};




