import {
    NutritionStyle,
    NutritionPosition,
    NutritionBTN
} from './Nutrition.styled';

const Nutrition = () => {
    return (
        <NutritionStyle>
            <NutritionPosition>Харчування</NutritionPosition>
            <NutritionBTN>Замовити</NutritionBTN>
        </NutritionStyle>
    )
};

export default Nutrition;