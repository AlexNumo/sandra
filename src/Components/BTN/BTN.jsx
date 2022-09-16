import { ButtonStyle } from './BTN.styled';

const BTN = ({ handleChange, TextBTN }) => {
    return (
        <ButtonStyle onClick={handleChange}>{TextBTN}</ButtonStyle>
    )
};

export default BTN;