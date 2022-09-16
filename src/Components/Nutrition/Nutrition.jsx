import BTN from 'Components/BTN/BTN';
import {
    NutritionStyle,
    NutritionPosition,
} from './Nutrition.styled';

const Nutrition = () => {
    return (
        <NutritionStyle>
            <NutritionPosition>Харчування</NutritionPosition>
            <BTN type="button" handleChange={""} TextBTN={'Замовити'} />
        </NutritionStyle>
    )
};

export default Nutrition;