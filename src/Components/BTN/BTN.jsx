import { ButtonStyle } from './BTN.styled';

const BTN = ({
    handleChange,
    TextBTN,
    type,
    disabled,
    autofocus
}) => {
    return (
        <ButtonStyle
            onClick={handleChange}
            type={type}
            disabled={disabled}
            autoFocus={autofocus}
        >
            {TextBTN}
        </ButtonStyle>
    )
};

export default BTN;